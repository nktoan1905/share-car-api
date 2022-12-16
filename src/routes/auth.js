import express from 'express';
import authController from '../controllers/authController.js';
import middlewareController from '../middleware/middlewareController.js';

const router = express.Router();

// register
router.post('/register', authController.registerUser);

// Login
router.post('/login', authController.login);

// refreshToken
router.post('/refresh', authController.refreshToken);

// Logout
router.post('/logout', middlewareController.verifyToken, authController.logout);

export default router;
