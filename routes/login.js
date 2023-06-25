// routes/login.js

const router = require('express').Router();
const AuthController = require('../controllers/authController');

router.post('/login', AuthController.loginUser);


module.exports = router;