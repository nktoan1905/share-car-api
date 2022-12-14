import express from 'express';
import tripController from '../controllers/tripController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/register-trip', middlewareController.verifyToken, tripController.createNewTrip);
router.get('/', middlewareController.verifyToken, tripController.getAllTrip);

export default router;
