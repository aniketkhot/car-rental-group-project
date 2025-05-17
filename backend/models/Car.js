const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  transmission: {
    type: String,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  doors: {
    type: Number,
    default: 4
  },
  luggageCapacity: {
    type: String,
    default: "2 Large Bags + 1 Cabin"
  },
  airConditioning: {
    type: Boolean,
    default: true
  },
  features: {
    type: [String],
    default: []
  },
  available: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    default: ""
  },
  imageUrl: {
    type: String,
    default: "/images/default-car.png"
  },
  rating: {
    type: Number,
    default: 0
  },
  numOfRatings: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);
