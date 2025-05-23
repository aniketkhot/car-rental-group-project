import React, { useEffect, useState } from "react";
import axiosAuth from "../axiosConfig";
import AddCar from "./AddCar";
import { Link } from 'react-router-dom';
import CarCard from './CarCard';

function CarList() {
  const [cars, setCars] = useState([]);

  const fetchCars = () => {
    axiosAuth
      .get("/car")
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Error fetching cars:", err));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await axiosAuth.delete(`/car/${id}`);
        alert("Car deleted successfully");
        fetchCars(); // refresh the list
      } catch (err) {
        console.error("Failed to delete car:", err);
      }
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Car List</h2>
      <AddCar onCarAdded={fetchCars} />

      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Registration</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.registrationNumber}</td>
                <td>{car.available ? "Yes" : "No"}</td>
                <td><Link to={`/cars/${car._id}`}>
                  <CarCard car={car} />
                </Link>
                </td>
                <td>
                  
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(car._id)}>
                  Delete
                </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CarList;
