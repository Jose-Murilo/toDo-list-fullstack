const { Router } = require('express');
const router = Router();
const registerControllers = require('../controllers/register');
const loginControllers  = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');
const prisma = require('../database');

router.get('/register', registerControllers.read);
router.post('/register', registerControllers.create);

router.post('/login', loginControllers.auth);

router.get('/system', authMiddleware, async (req, res) => {
    const id = req.userID;
    const user = await prisma.users.findUnique({where: {id: Number(id)}});
    res.json({
        system: true, 
        id,
        email: user.email, 
        status: "authorized"
    })
});

module.exports = router