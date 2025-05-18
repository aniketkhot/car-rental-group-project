const paymentService = require("../services/paymentService");

exports.payForRental = async (req, res) => {
  try {
    const { customerId, rentalId, amount, method } = req.body;

    if (!customerId || !rentalId || !amount || !method) {
      return res.status(400).json({ message: "Missing payment data" });
    }

    const payment = await paymentService.processPayment({
      customerId,
      rentalId,
      amount,
      method
    });

    res.status(201).json({ message: "Payment saved", payment });
  } catch (error) {
    res.status(500).json({ message: "Payment failed", error: error.message });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await paymentService.getAllPayments();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch payments", error: error.message });
  }
};
