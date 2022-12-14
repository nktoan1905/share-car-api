import express from 'express';

import cityController from '../controllers/cityController';

const router = express.Router();

// lấy danh sách tất cả các xe
router.get('/city', cityController.getAllCity);
router.get('/district', cityController.getAllDistrict);

export default router;
