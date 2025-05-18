module.exports = {
    process({ amount, customerId, rentalId }) {
      return {
        gateway: "Stripe",
        status: "SUCCESS",
        transactionId: "STRIPE-" + Date.now(),
        amount,
        currency: "AUD",
        customerId,
        rentalId,
        timestamp: new Date().toISOString()
      };
    }
  };
  