import express from 'express';
import userController from '../controllers/userController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// Profile
router.get('/:id', middlewareController.verifyToken, userController.profileUser);

// Update profile
router.put('/update_profile', middlewareController.verifyToken, userController.updateUser);


export default router;
