import express from 'express';
import { getHotelsByDestination } from '../controller/hotelController.js';

const router = express.Router();

// Get hotels by destination
router.get('/search', getHotelsByDestination);

export default router;
