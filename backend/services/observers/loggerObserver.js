module.exports = function logPayment(payment) {
    console.log(`[LoggerObserver] Payment of $${payment.amount} for rental ${payment.rentalId} logged successfully.`);
  };
  