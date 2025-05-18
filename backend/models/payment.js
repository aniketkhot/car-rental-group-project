const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  gateway: { type: String, required: true },
  status: { type: String, default: "SUCCESS" },
  amount: { type: Number, required: true },
  currency: { type: String, default: "AUD" },
  method: { type: String, required: true },

  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rentalId: { type: mongoose.Schema.Types.ObjectId, ref: "Rental", required: true },

  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", paymentSchema);
