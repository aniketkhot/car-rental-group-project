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
    startDate: "",
    endDate: "",
    pricePerDay: 0,
    totalPrice: 0,
    paymentStatus: "pending",
    rentalStatus: "booked",
    isCorporate: false,
    notes: "",
  });

  useEffect(() => {
    fetchRentals();
    fetchCars();
    fetchCustomers();
  }, []);

  const fetchRentals = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/rental");
      setRentals(res.data);
    } catch (err) {
      console.error("Error fetching rentals", err);
    }
  };

  const fetchCars = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/car");
      setCars(res.data);
    } catch (err) {
      console.error("Error fetching cars", err);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/customer");
      setCustomers(res.data);
    } catch (err) {
      console.error("Error fetching customers", err);
    }
  };

  const handleChange = (e) => {
    setNewRental({ ...newRental, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setNewRental({ ...newRental, [e.target.name]: e.target.checked });
  };
const handleAddRental = async () => {
  const startDateObj = new Date(newRental.startDate);
  const endDateObj = new Date(newRental.endDate);


  if (isNaN(startDateObj) || isNaN(endDateObj)) {
    alert('please enter valid dates');
    return;
  }

  const postData = {
    customer: newRental.customerId,
    car: newRental.carId,
    startDate: startDateObj.toISOString(),
    endDate: endDateObj.toISOString(),
    pricePerDay: Number(newRental.pricePerDay),
    totalPrice: Number(newRental.totalPrice),
    paymentStatus: newRental.paymentStatus,
    rentalStatus: newRental.rentalStatus,
    isCorporate: newRental.isCorporate,
    notes: newRental.notes,
  };

  try {
    await axios.post("http://localhost:5001/api/rental", postData);
  window.location.reload();
  } catch (err) {
    console.error("Error adding rental", err);
  }
};

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this rental?")) {
    try {
      const token = localStorage.getItem('token'); 
      await axios.delete(`http://localhost:5001/api/rental/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
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

        <input
          type="date"
          className="form-control mb-2"
          name="startDate"
          value={newRental.startDate}
          onChange={handleChange}
        />

        <input
          type="date"
          className="form-control mb-2"
          name="endDate"
          value={newRental.endDate}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mb-2"
          name="pricePerDay"
          placeholder="Price Per Day"
          value={newRental.pricePerDay}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mb-2"
          name="totalPrice"
          placeholder="Total Price"
          value={newRental.totalPrice}
          onChange={handleChange}
        />

        <select
          className="form-select mb-2"
          name="paymentStatus"
          value={newRental.paymentStatus}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="failed">Failed</option>
        </select>

        <select
          className="form-select mb-2"
          name="rentalStatus"
          value={newRental.rentalStatus}
          onChange={handleChange}
        >
          <option value="booked">Booked</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="isCorporate"
            checked={newRental.isCorporate}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">Corporate Rental</label>
        </div>

        <textarea
          className="form-control mb-2"
          name="notes"
          placeholder="Notes"
          value={newRental.notes}
          onChange={handleChange}
        />

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
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price Per Day</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Rental Status</th>
              <th>Corporate</th>
              <th>Notes</th>
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
                <td>{new Date(rental.startDate).toLocaleDateString()}</td>
                <td>{new Date(rental.endDate).toLocaleDateString()}</td>
                <td>{rental.pricePerDay}</td>
                <td>{rental.totalPrice}</td>
                <td>{rental.paymentStatus}</td>
                <td>{rental.rentalStatus}</td>
                <td>{rental.isCorporate ? "Yes" : "No"}</td>
                <td>{rental.notes}</td>
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