const mongoose = require('mongoose');

const landingBookingSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: false },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: false },
  pickupDate: { type: Date, required: true },
  dropoffDate: { type: Date, required: true }
});

module.exports = mongoose.model('LandingBooking', landingBookingSchema);