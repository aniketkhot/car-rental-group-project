module.exports = {
    process({ amount, customerId, rentalId }) {
      return {
        gateway: "PayPal",
        status: "SUCCESS",
        transactionId: "PAYPAL-" + Date.now(),
        amount,
        currency: "AUD",
        customerId,
        rentalId,
        timestamp: new Date().toISOString()
      };
    }
  };
  