import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./RentalList.module.css";

function RentalList() {
  const [rentals, setRentals] = useState([]);
  const [cars, setCars] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [newRental, setNewRental] = useState({
    customerId: "",
    carId: "",
    active: true,
  });

  useEffect(() => {
    fetchRentals();
    fetchCars();
    fetchCustomers();
  }, []);

  const fetchRentals = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/rentals");
      setRentals(res.data);
    } catch (err) {
      console.error("Error fetching rentals", err);
    }
  };

  const fetchCars = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/cars");
      setCars(res.data);
    } catch (err) {
      console.error("Error fetching cars", err);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/customers");
      setCustomers(res.data);
    } catch (err) {
      console.error("Error fetching customers", err);
    }
  };

  const handleChange = (e) => {
    setNewRental({ ...newRental, [e.target.name]: e.target.value });
  };

  const handleCheckbox = () => {
    setNewRental({ ...newRental, active: !newRental.active });
  };

  const handleAddRental = async () => {
    try {
      await axios.post("http://localhost:5001/api/rentals", {
        customer: newRental.customerId,
        car: newRental.carId,
        active: newRental.active,
      });
      setNewRental({ customerId: "", carId: "", active: true });
      fetchRentals();
    } catch (err) {
      console.error("Error adding rental", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this rental?")) {
      try {
        await axios.delete(`http://localhost:5001/api/rentals/${id}`);
        alert("Rental deleted successfully");
        fetchRentals();
      } catch (err) {
        console.error("Failed to delete rental:", err);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Rental List</h2>

      <div className={styles.card}>
        <h5>Add New Rental</h5>
        <select
          className="form-select mb-2"
          name="customerId"
          value={newRental.customerId}
          onChange={handleChange}
        >
          <option value="">Select Customer</option>
          {customers.map((cust) => (
            <option key={cust._id} value={cust._id}>
              {cust.fullName}
            </option>
          ))}
        </select>

        <select
          className="form-select mb-2"
          name="carId"
          value={newRental.carId}
          onChange={handleChange}
        >
          <option value="">Select Car</option>
          {cars.map((car) => (
            <option key={car._id} value={car._id}>
              {car.make} {car.model} ({car.registrationNumber})
            </option>
          ))}
        </select>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={newRental.active}
            onChange={handleCheckbox}
            id="activeRental"
          />
          <label className="form-check-label" htmlFor="activeRental">
            Active
          </label>
        </div>

        <button className={styles.btnAdd} onClick={handleAddRental}>
          Add Rental
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Car</th>
              <th>Status</th>
              <th>Start Date</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {rentals.map((rental) => (
              <tr key={rental._id}>
                <td>{rental.customer?.fullName || "N/A"}</td>
                <td>
                  {rental.car?.make} {rental.car?.model} (
                  {rental.car?.registrationNumber})
                </td>
                <td>{rental.active ? "Active" : "Inactive"}</td>
                <td>{new Date(rental.startDate).toLocaleDateString()}</td>
                <td className="text-end">
                  <button
                    className={styles.btnDel}
                    onClick={() => handleDelete(rental._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RentalList;
