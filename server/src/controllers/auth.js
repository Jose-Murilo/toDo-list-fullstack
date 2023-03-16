const prisma = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../configs/auth.json')

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;
        if (!email) return res.status(400).json('Email is required');
        if (!password) return res.status(400).json('Password is required');

        const user = await prisma.register.findUnique({where: {email}});
        if (!user) return res.status(400).json('Email or Password is required');

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) return res.status(400).json('Password or Email is required');

        const token = jwt.sign({ id: user.id, secret, expiresIn })

        return res.status(200).json({
            id: user.id,
            status: 'AuAuthenticated',
            token
        })
    }
}