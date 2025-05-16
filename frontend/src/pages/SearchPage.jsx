import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search-and-checkout.css';   // unified styles

function SearchPage() {
  /*  form state */
  const [locationInput, setLocationInput] = useState('');
  const [pickUpDate,   setPickUpDate]   = useState('');
  const [pickUpTime,   setPickUpTime]   = useState('');
  const [dropOffDate,  setDropOffDate]  = useState('');
  const [dropOffTime,  setDropOffTime]  = useState('');

  const navigate = useNavigate();

 /* navigate to results page */
  const handleSearch = () => {
    navigate('/aftersearch', {
      state: {
        location: locationInput,
        pickUpDate,
        pickUpTime,
        dropOffDate,
        dropOffTime,
      },
    });
  };

  /* dummy car data */
  const cars = Array(9).fill({
    id: Math.random(),
    name: 'SUV',
    price: '$79.99',
    duration: 'Price for 2 days from',
    image: '/car1.jpg',
  });

  return (
    <div className="search-page">
      {/*  Header  */}
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

      {/*  Search bar  */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pick-up location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <input type="date" value={pickUpDate}  onChange={(e) => setPickUpDate(e.target.value)} />
        <input type="time" value={pickUpTime}  onChange={(e) => setPickUpTime(e.target.value)} />
        <input type="date" value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} />
        <input type="time" value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} />

        {/* Search button */}
        <button className="btn search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/*  Car grid (placeholder)  */}
      <div className="car-grid">
        {cars.map((car, idx) => (
          <div key={idx} className="car-card">
            <img src={car.image} alt="car" className="car-image" />
            <h4>{car.name}</h4>
            <p>{car.duration}</p>
            <h3>{car.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
