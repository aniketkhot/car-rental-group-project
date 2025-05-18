module.exports = {
    process({ amount, customerId, rentalId }) {
      return {
        gateway: "Razorpay",
        status: "SUCCESS",
        transactionId: "RAZOR-" + Date.now(),
        amount,
        currency: "AUD",
        customerId,
        rentalId,
        timestamp: new Date().toISOString()
      };
    }
  };
  