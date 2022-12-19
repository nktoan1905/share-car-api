import express from 'express';
import tripController from '../controllers/tripController.js';
import middlewareController from '../middleware/middlewareController.js';

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/register-trip', middlewareController.verifyToken, tripController.createNewTrip);

router.post('/:tripId', middlewareController.verifyToken, tripController.handleOrderTripByUserIdAndTripId);
router.get('/', middlewareController.verifyToken, tripController.getAllTrip);
router.get('/driver/', middlewareController.verifyToken, tripController.handleGetAllTripByDriverId);
router.get('/user/', middlewareController.verifyToken, tripController.handleGetAllTripByUserId);
router.get('/:tripId', middlewareController.verifyToken, tripController.handleGetAllUserInTrip);

router.delete('/:tripId', middlewareController.verifyToken, tripController.handleDeleteTripByTripId);

router.put('/:tripId', middlewareController.verifyToken, tripController.handleupdateStatusTrip);

export default router;
