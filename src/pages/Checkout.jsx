import React from 'react';
import './Checkout.css'; 

function CheckoutPage() {
  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: '#89B6C9', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold' }}>RENT</div>
        <div>
          <button style={{ marginRight: '10px' }}>Register</button>
          <button>Login in</button>
        </div>
      </header>

      {/* Checkout Section */}
      <section style={{ backgroundColor: '#FAF4E7', padding: '20px' }}>
        <h2>Checkout</h2>
        <div style={{ display: 'flex', backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
          <img src="https://cdn.pixabay.com/photo/2016/11/29/05/08/yellow-car-1869241_1280.jpg" alt="Kia Picanto" style={{ width: '250px', marginRight: '20px' }} />
          <div>
            <h3>Kia Picanto</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>👤 5 Person</li>
              <li>🧳 1 Large Bag</li>
              <li>🚗 Unlimited miles</li>
              <li>📍 Address</li>
            </ul>
            <p style={{ fontWeight: 'bold' }}>Price for 1 day: <span style={{ color: 'orange' }}>$75.00</span></p>
            <button style={{ backgroundColor: 'orange', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>View</button>
          </div>
        </div>

        {/* Main Driver Details */}
        <h3 style={{ marginTop: '30px' }}>Main driver's details</h3>
        <form className="form-section">
          <input type="email" placeholder="Email id*" required />
          <input type="text" placeholder="First name*" required />
          <input type="text" placeholder="Last name*" required />
          <input type="text" placeholder="Contact number*" required />
        </form>
      </section>

      {/* Billing Section */}
      <section style={{ backgroundColor: '#F6F6F6', padding: '20px' }}>
        <h3>Booking</h3>
        <h4>Billing Address</h4>
        <form className="form-section">
          <input type="text" placeholder="First name*" required />
          <input type="text" placeholder="Last name*" required />
          <input type="text" placeholder="Contact number*" required />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postcode" />

          <h4>How would you like to pay?</h4>
          <input type="text" placeholder="Cardholder’s Name" />
          <input type="text" placeholder="Card Number*" required />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="Expiry Date*" />
            <input type="text" placeholder="CVC" />
          </div>

          <button style={{ backgroundColor: 'orange', border: 'none', marginTop: '20px', padding: '10px 20px', borderRadius: '5px' }}>Book now</button>
        </form>
      </section>
    </div>
  );
}

export default CheckoutPage;
