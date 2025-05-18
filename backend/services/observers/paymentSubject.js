class PaymentSubject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observerFn) {
      this.observers.push(observerFn);
    }
  
    unsubscribe(observerFn) {
      this.observers = this.observers.filter(fn => fn !== observerFn);
    }
  
    notify(paymentData) {
      for (const fn of this.observers) {
        fn(paymentData);
      }
    }
  }
  
  module.exports = new PaymentSubject();
  