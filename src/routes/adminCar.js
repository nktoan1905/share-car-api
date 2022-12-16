import express from 'express';
import carController from '../controllers/carController.js';
import middlewareController from '../middleware/middlewareController.js';

const router = express.Router();

// lấy danh sách tất cả các xe  
router.post('/', middlewareController.verifyTokenAndAdminAuth, carController.getAllCarForAdmin);

router.put('/:carId', middlewareController.verifyTokenAndAdminAuth, carController.UpdateStatusRequest);

export default router;
