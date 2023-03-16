const { Router } = require('express');
const router = Router();
const registerControllers = require('../controllers/register');

router.get('/register', registerControllers.read);
router.post('/register', registerControllers.create);

router.post('/login')

module.exports = router