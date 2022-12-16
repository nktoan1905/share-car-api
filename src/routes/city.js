import express from 'express';

import cityController from '../controllers/cityController.js';

const router = express.Router();

// lấy danh sách tất cả các xe
router.get('/city', cityController.handleGetAllCityAndDistrictsOfThisCity);

export default router;
