module.exports = function sendEmailReceipt(payment) {
    console.log(`[EmailObserver] Receipt sent to user ${payment.customerId} for $${payment.amount} via ${payment.gateway}`);
  };
  