const router = require('express').Router();
const AuthController = require('../controllers/authController');

router.post('/register', AuthController.createUser);

module.exports = router;
