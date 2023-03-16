const jwt = require('jsonwebtoken');
const { secret } = require('../configs/auth.json')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json("Please inform your token");

    jwt.verify(token, secret, (error, decode) => {
        if (error) return res.status(401).json(error);
        req.userID = decode.id;
        next();
    })
};