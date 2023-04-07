const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/is-logged-in', authController.isLoggedIn);
router.post('/signup', authController.signup);
router.get('/me', userController.getMe);

module.exports = router;
