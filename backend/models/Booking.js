const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  contactNumber: String,
  address: String,
  country: String,
  city: String,
  postcode: String,
  cardName: String,
  cardNumber: String,
  expiryDate: String,
  cvc: String,
  car: String,
  price: String,
  dateBooked: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
