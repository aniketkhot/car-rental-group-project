import React, { useState } from 'react';
import axios from 'axios';
import './Search-and-checkout.css';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    country: '',
    city: '',
    postcode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/bookings/checkout', formData);
      setConfirmation('Booking confirmed!');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        address: '',
        country: '',
        city: '',
        postcode: '',
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
      });
    } catch (error) {
      console.error(error);
      setConfirmation(' Booking failed. Please try again.');
    }
  };

  return (
    <div className="checkout-container">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          {/*<img src="/logo.png" alt="logo" className="logo" */}
          <div>
            <h2>Car hire in Brisbane</h2>
            <p className="tagline">Great cars at great prices</p>
          </div>
        </div>
        {/*<div className="auth-buttons">
          <button className="btn">Register</button>
          <button className="btn">Login</button>
        </div>*/}
      </header>

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Checkout</h2>
        <div className="car-details">
          <img src="/car1.jpg" alt="Kia Picanto" className="checkout-car-img" />
          <div className="car-info">
            <h3>Kia Picanto</h3>
            <ul>
              <li>👤 5 Person</li>
              <li>🧳 1 Large Bag</li>
              <li>🚗 Unlimited miles</li>
              <li>📍 Address</li>
            </ul>
            <p>
              Price for 1 day: <span className="highlight-price">$75.00</span>
            </p>
            <div className="auth-buttons">
              <button className="btn">View</button>
            </div>
          </div>
        </div>

        {/* Main Driver Details */}
        <h3 className="section-title">Main driver's details</h3>
        <form className="form-section" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email id*"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="First name*"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact number*"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            required
          />

          {/* Billing Section */}
          <h3>Booking</h3>
          <h4>Billing Address</h4>
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Postcode"
            value={formData.postcode}
            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
          />

          <h4>How would you like to pay?</h4>
          <input
            type="text"
            placeholder="Cardholder’s Name"
            value={formData.cardName}
            onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Card Number*"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            required
          />
          <div className="payment-section">
            <input
              type="text"
              placeholder="Expiry Date*"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            />
            <input
              type="text"
              placeholder="CVC"
              value={formData.cvc}
              onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
            />
          </div>

          <button className="book-now-button">Book now</button>

          {/* Confirmation message */}
          {confirmation && <p style={{ marginTop: '10px' }}>{confirmation}</p>}
        </form>
      </section>
    </div>
  );
}

export default CheckoutPage;
