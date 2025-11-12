import mongoose from 'mongoose';
import Booking from '../models/bookingModel.js';

// Define Service schema inline to ensure it's properly registered
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  serviceType: { type: String, required: true },
  provider: { type: String, required: true },
  duration: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  available: { type: Boolean, default: true }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { services, address, date, time, mobile, instructions } = req.body;
    
    // Log the request body for debugging
    console.log('Received booking request:', req.body);
    
    // Validate required fields
    if (!services || services.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please add at least one service to your booking' 
      });
    }
    
    if (!address) {
      return res.status(400).json({ 
        success: false, 
        message: 'Address is required' 
      });
    }
    
    if (!date) {
      return res.status(400).json({ 
        success: false, 
        message: 'Date is required' 
      });
    }
    
    if (!time) {
      return res.status(400).json({ 
        success: false, 
        message: 'Time slot is required' 
      });
    }
    
    if (!mobile) {
      return res.status(400).json({ 
        success: false, 
        message: 'Mobile number is required' 
      });
    }
    
    // Calculate total amount
    let totalAmount = 0;
    const bookingServices = [];
    
    for (const item of services) {
      const service = await Service.findById(item.serviceId);
      if (!service) {
        return res.status(404).json({ 
          success: false, 
          message: `Service with ID ${item.serviceId} not found` 
        });
      }
      
      const serviceTotal = service.price * item.quantity;
      totalAmount += serviceTotal;
      
      bookingServices.push({
        service: service._id,
        quantity: item.quantity,
        price: service.price,
      });
    }
    
    // Create booking
    const booking = await Booking.create({
      user: req.userId, // Use userId from middleware
      services: bookingServices,
      totalAmount,
      address,
      date,
      time,
      mobile,
      instructions,
    });
    
    // Populate service details for response with error handling
    let populatedBooking;
    try {
      populatedBooking = await Booking.findById(booking._id).populate({
        path: 'services.service',
        select: 'name image provider duration serviceType'
      });
    } catch (populateError) {
      console.warn('Service population failed for booking:', populateError);
      // If population fails, use the original booking without populated services
      populatedBooking = booking;
    }
    
    console.log('Booking created successfully:', populatedBooking);
    
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: populatedBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Get user bookings
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }) // Use userId from middleware
      .populate({
        path: 'services.service',
        select: 'name image provider duration serviceType'
      })
      .sort({ createdAt: -1 });
    
    // Log the fetched bookings for debugging
    console.log('Fetched bookings:', bookings.length);
    
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch bookings'
    });
  }
};

// Update booking status
const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const booking = await Booking.findById(id);
    
    if (!booking) {
      return res.status(404).json({ 
        success: false, 
        message: 'Booking not found' 
      });
    }
    
    // Check if booking belongs to user
    if (booking.user.toString() !== req.userId) { // Use userId from middleware
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized to update this booking' 
      });
    }
    
    booking.status = status;
    await booking.save();
    
    res.status(200).json({
      success: true,
      message: `Booking ${status} successfully`,
      booking,
    });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Cancel booking
const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    
    const booking = await Booking.findById(id);
    
    if (!booking) {
      return res.status(404).json({ 
        success: false, 
        message: 'Booking not found' 
      });
    }
    
    // Check if booking belongs to user
    if (booking.user.toString() !== req.userId) { // Use userId from middleware
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized to cancel this booking' 
      });
    }
    
    // Only allow cancellation if booking is not completed
    if (booking.status === 'completed') {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot cancel a completed booking' 
      });
    }
    
    booking.status = 'cancelled';
    await booking.save();
    
    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully',
      booking,
    });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Complete booking with rating and review
const completeBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, review } = req.body;
    
    const booking = await Booking.findById(id);
    
    if (!booking) {
      return res.status(404).json({ 
        success: false, 
        message: 'Booking not found' 
      });
    }
    
    // Check if booking belongs to user
    if (booking.user.toString() !== req.userId) { // Use userId from middleware
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized to update this booking' 
      });
    }
    
    // Only allow completion if booking is confirmed or in-progress
    if (booking.status !== 'confirmed' && booking.status !== 'in-progress') {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot complete a booking that is not confirmed or in-progress' 
      });
    }
    
    booking.status = 'completed';
    booking.rating = rating;
    booking.review = review;
    await booking.save();
    
    res.status(200).json({
      success: true,
      message: 'Booking completed successfully',
      booking,
    });
  } catch (error) {
    console.error('Error completing booking:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

export {
  createBooking,
  getUserBookings,
  updateBookingStatus,
  cancelBooking,
  completeBooking,
};