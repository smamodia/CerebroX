import express from 'express';
import { getBuses, getTrains, getFlights } from '../controllers/controller.js';

const router = express.Router();

// Routes for buses, trains, and flights
router.get('/bus', getBuses);
router.get('/train', getTrains);
router.get('/flights', getFlights);

export default router;




