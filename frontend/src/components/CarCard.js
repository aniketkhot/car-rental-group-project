import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="card shadow-sm mb-3">
      <img src={car.imageUrl} className="card-img-top" alt={car.model} />
      <div className="card-body">
        <h5 className="card-title">{car.brand} {car.model}</h5>
        <p className="card-text">${car.pricePerDay} / day</p>
        <p className="text-muted">{car.transmission} • {car.fuelType}</p>
      </div>
    </div>
  );
};

export default CarCard;
