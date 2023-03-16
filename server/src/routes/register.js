const { Router } = require('express');
const router = Router();
const registerControllers = require('../controllers/register');
const loginControllers  = require('../controllers/auth');

router.get('/register', registerControllers.read);
router.post('/register', registerControllers.create);

router.post('/login', loginControllers.auth);


module.exports = router