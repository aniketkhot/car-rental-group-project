import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search-and-checkout.css';

function SearchPage() {
  
  const [locationInput, setLocationInput] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');

  const navigate = useNavigate();


  const cars = Array(9).fill(0).map((_, index) => ({
    id: index + 1,
    name: 'SUV',
    price: '$79.99',
    duration: 'Price for 2 days from',
    image: '/car1.jpg', 
  }));

 
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

  
  const handleViewDetails = (carId) => {
    navigate(`/cars/${carId}`);
  };

  return (
    <div className="search-page">
   
      <h2>Search for Your Car</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pick-up location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <input
          type="date"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
        />
        <input
          type="time"
          value={pickUpTime}
          onChange={(e) => setPickUpTime(e.target.value)}
        />
        <input
          type="date"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
        />
        <input
          type="time"
          value={dropOffTime}
          onChange={(e) => setDropOffTime(e.target.value)}
        />
        <button className="btn search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={`Car ${car.id}`} className="car-image" />
            <h4>{car.name}</h4>
            <p>{car.duration}</p>
            <h3>{car.price}</h3>
            {/* Button to view car details */}
            <button
              className="btn btn-primary" style={{ backgroundColor: '#F96E2A' }}
              onClick={() => handleViewDetails(car.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;