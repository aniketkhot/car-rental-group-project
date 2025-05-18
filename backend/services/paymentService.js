const stripeAdapter = require("./gateways/stripeAdapter");
const paypalAdapter = require("./gateways/paypalAdapter");
const razorpayAdapter = require("./gateways/razorpayAdapter");
const Payment = require("../models/Payment");

class PaymentService {
  constructor() {
    if (PaymentService.instance) return PaymentService.instance;

    this.currency = "AUD";
    this.gatewayMap = {
      stripe: stripeAdapter,
      paypal: paypalAdapter,
      razorpay: razorpayAdapter
    };

    PaymentService.instance = this;
  }

  async processPayment({ amount, method, customerId, rentalId }) {
    const gateway = this.gatewayMap[method?.toLowerCase()];

    if (!gateway) {
      throw new Error(`Unsupported payment method: ${method}`);
    }

    const result = gateway.process({ amount, customerId, rentalId });

    const savedPayment = new Payment({
      ...result,
      method,
      customerId,
      rentalId
    });

    await savedPayment.save();
    return savedPayment;
  }

  async getAllPayments() {
    return Payment.find().populate("customerId").populate("rentalId").sort({ timestamp: -1 });
  }
}

const singletonInstance = new PaymentService();


module.exports = singletonInstance;
