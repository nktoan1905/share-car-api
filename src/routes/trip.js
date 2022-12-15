import express from 'express';
import tripController from '../controllers/tripController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/register-trip', middlewareController.verifyToken, tripController.createNewTrip);
router.post('/:tripId', middlewareController.verifyToken, tripController.handleOrderTripByUserIdAndTripId);
router.get('/', middlewareController.verifyToken, tripController.getAllTrip);
router.get('/:tripId', middlewareController.verifyToken, tripController.handleGetAllUserInTrip);
router.delete('/:tripId', middlewareController.verifyToken, tripController.handleDeleteTripByTripId);

export default router;
