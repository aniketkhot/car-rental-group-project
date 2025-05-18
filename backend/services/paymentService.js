const stripeAdapter = require("./gateways/stripeAdapter");
const paypalAdapter = require("./gateways/paypalAdapter");
const razorpayAdapter = require("./gateways/razorpayAdapter");
const Payment = require("../models/Payment");

const paymentSubject = require("./observers/paymentSubject");
const sendEmailReceipt = require("./observers/emailObserver");
const logPayment = require("./observers/loggerObserver");

class PaymentService {
  constructor() {
    if (PaymentService.instance) return PaymentService.instance;

    this.currency = "AUD";
    this.gatewayMap = {
      stripe: stripeAdapter,
      paypal: paypalAdapter,
      razorpay: razorpayAdapter
    };

    paymentSubject.subscribe(sendEmailReceipt);
    paymentSubject.subscribe(logPayment);

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
    paymentSubject.notify(savedPayment);
    return savedPayment;
  }

  async getAllPayments() {
    return Payment.find().populate("customerId").populate("rentalId").sort({ timestamp: -1 });
  }
}

const singletonInstance = new PaymentService();


module.exports = singletonInstance;
