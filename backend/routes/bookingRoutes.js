// backend/routes/bookingRoutes.js
import express from 'express';
import protect from '../middleware/protect.js'; // Import the new protect middleware
import {
  createBooking,
  getUserBookings,
  updateBookingStatus,
  cancelBooking,
  completeBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/', createBooking);
router.get('/user', getUserBookings);
router.put('/:id', updateBookingStatus);
router.put('/:id/cancel', cancelBooking);
router.put('/:id/complete', completeBooking);

export default router;