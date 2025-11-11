import mongoose from 'mongoose';

// Import all models to ensure they're registered
import User from './User.js';
import Service from './serviceModel.js';
import Booking from './bookingModel.js';

console.log('All models loaded successfully');
console.log('User model:', User?.modelName || 'undefined');
console.log('Service model:', Service?.modelName || 'undefined');
console.log('Booking model:', Booking?.modelName || 'undefined');

export { User, Service, Booking };