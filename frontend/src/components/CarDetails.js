import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
     axios.get(`cars/${id}`)
      .then(res => setCar(res.data))
      .catch(err => console.error(err));
  }, [id]);
  console.log(car)
  if (!car) return <div className="container text-center p-5">Loading car details...</div>;

  return (
    <div className="container my-5 p-4 rounded shadow" style={{ backgroundColor: '#EBE9E1' }}>
      <div className="row">
        
        <div className="col-md-6 d-flex flex-column align-items-center">
          <img
            src={`/img/11452739.png` || 'https://via.placeholder.com/500x300'}
            alt={`${car.brand} ${car.model}`}
            className="img-fluid rounded shadow-sm mb-3"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
          <button className="btn mt-3 px-4" style={{ backgroundColor: '#E43D12', color: '#fff' }}>
            Rent Now
          </button>
        </div>

        
        <div className="col-md-6">
  <h2 className="mb-2">{car.brand} {car.model} ({car.year})</h2>
  <p className="mb-1"><strong>Price per Day:</strong> ${car.pricePerDay}</p>
  <p className="mb-1"><strong>Transmission:</strong> {car.transmission}</p>
  <p className="mb-1"><strong>Fuel Type:</strong> {car.fuelType}</p>
  <p className="mb-1"><strong>Seats:</strong> {car.seats}</p>
  <p className="mb-1"><strong>Doors:</strong> {car.doors}</p>
  <p className="mb-1"><strong>Luggage Capacity:</strong> {car.luggageCapacity}</p>
  <p className="mb-1"><strong>Air Conditioning:</strong> {car.airConditioning ? 'Yes ❄️' : 'No'}</p>
  <p className="mb-1"><strong>Availability:</strong> {car.available ? '✅ Available' : '❌ Unavailable'}</p>

  <p className="mb-2"><strong>Rating:</strong> ⭐ {car.rating} / 5 ({car.numOfRatings} reviews)</p>

  <div className="mt-4">
    <h5>Features</h5>
    <ul className="list-unstyled">
      {car.features && car.features.length > 0 ? (
        car.features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))
      ) : (
        <li>No features listed</li>
      )}
    </ul>
  </div>

  <div className="mt-4">
    <h5>Description</h5>
    <p>{car.description || "No description available for this car."}</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default CarDetails;
