const mongoose = require('mongoose');

const landingBookingSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  pickupDate: { type: Date, required: true },
  dropoffDate: { type: Date, required: true }
});

module.exports = mongoose.model('LandingBooking', landingBookingSchema);