const mongoose = require("mongoose");

const rentalRecordSchema = new mongoose.Schema({
  carName: String,
  userName: String,
  leaseDate: Date,
  returnDate: {
    type: Date,
    required: false,
    default: null,
  },
  status: String,
});

module.exports = mongoose.model("RentalRecord", rentalRecordSchema);
