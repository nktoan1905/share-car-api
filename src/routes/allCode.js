import express from 'express';
import allCodeController from '../controllers/allCodeController.js';

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/', allCodeController.getAllCode);

export default router;
