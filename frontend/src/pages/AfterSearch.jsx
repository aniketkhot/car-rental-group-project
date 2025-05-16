import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Search-and-checkout.css';

function AfterSearchPage() {
  /*  read data sent from SearchPage (may be undefined on hard refresh)  */
  const { state } = useLocation();

  const [location,  setLocation]  = useState(state?.location    || '');
  const [puDate,    setPuDate]    = useState(state?.pickUpDate  || '');
  const [puTime,    setPuTime]    = useState(state?.pickUpTime  || '');
  const [doDate,    setDoDate]    = useState(state?.dropOffDate || '');
  const [doTime,    setDoTime]    = useState(state?.dropOffTime || '');

  /* dummy result data – replace with real API later */
  const cars = Array(3).fill({
    name:  'Kia Picanto',
    price: '$75.00',
    image: '/car1.jpg',
    specs: [
      '👤 5 Person',
      '🧳 1 Large Bag',
      '📍 Address',
      '🚗 Unlimited miles',
    ],
  });

  return (
    <div className="search-results-page">
      {/*  Top bar  */}
      <header className="header">
        <div className="logo-section">
         {/*<img src="/logo.png" alt="logo" className="logo" */}
        </div>

        {/* search controls show the values we received */}
        <div className="search-controls">
          <input value={location}  onChange={(e) => setLocation(e.target.value)} />
          <input type="date" value={puDate} onChange={(e) => setPuDate(e.target.value)} />
          <input type="time" value={puTime} onChange={(e) => setPuTime(e.target.value)} />
          <input type="date" value={doDate} onChange={(e) => setDoDate(e.target.value)} />
          <input type="time" value={doTime} onChange={(e) => setDoTime(e.target.value)} />
          <button className="btn">Edit</button>
        </div>

        <div className="auth-buttons">
          <button className="btn">Register</button>
          <button className="btn">Login</button>
        </div>
      </header>

      {/*  Main layout */}
      <div className="results-layout">
        {/* Sidebar filter */}
        <aside className="filter-panel">
          <h3>Filter</h3>
          <hr />
          <h4>Type</h4>
          {[
            'Sedan',
            'SUVs (Sport Utility Vehicle)',
            'Coupe',
            'Sports Car',
            'Hatchback',
            'Minivan',
            'EV',
          ].map(type => (
            <div key={type}>
              <input type="checkbox" id={type} />
              <label htmlFor={type}> {type}</label>
            </div>
          ))}
          <hr />
          <h4>Price</h4>
          <label>Min:</label>
          <input type="number" placeholder="9.89" />
          <label>Max:</label>
          <input type="number" placeholder="59.55" />
          <button className="btn" style={{ marginTop: '10px' }}>
            Search
          </button>
        </aside>

        {/* Car results */}
        <section className="car-results">
          {cars.map((car, idx) => (
            <div key={idx} className="car-details">
              <img src={car.image} alt={car.name} className="checkout-car-img" />
              <div className="car-info">
                <h3>{car.name}</h3>
                <ul>
                  {car.specs.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p>
                    Price for 1 day:{' '}
                    <span className="highlight-price">{car.price}</span>
                  </p>
                  <button className="btn">View</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default AfterSearchPage;
