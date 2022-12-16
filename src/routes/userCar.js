import express from 'express';
import carController from '../controllers/carController.js';
import middlewareController from '../middleware/middlewareController.js';

const router = express.Router();

// gửi đăng kí car
router.post('/register', middlewareController.verifyToken, carController.registerNewCar);
// lấy danh sách xe đã đăng kí và đang chờ approve của admin
router.post('/', middlewareController.verifyToken, carController.getAllCarForUser);
// xóa carId
router.delete('/:carId', middlewareController.verifyToken, carController.deleteCarForUser);

export default router;
