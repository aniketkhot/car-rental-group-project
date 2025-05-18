import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";
import UpdateCustomerForm from "./UpdateCustomerForm";


function CustomerList() {

  const [customers, setCustomers] = useState([]);
  

  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });
  
  
  const [editingCustomer, setEditingCustomer] = useState(null);
  


  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("/user");
      setCustomers(res.data);
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Customer?")) {
      try {
        await axios.delete(`/user/${id}`);
        alert("Car deleted successfully");
        fetchCustomers(); // refresh the list
      } catch (err) {
        console.error("Failed to delete customer:", err);
      }
    }
  };

  const handleAddCustomer = async () => {
    try {
      await axios.post("/user", newCustomer);
      setNewCustomer({ fullName: "", email: "", phone:"", address:"" });
      fetchCustomers();
    } catch (err) {
      console.error("Error adding customer:", err);
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      <div className="card p-3 mb-4" style={{ backgroundColor: "#FBF8EF"}}>
        <h5>Add New Customer</h5>
        <input
          type="text"
          className="form-control mb-2"
          name="fullName"
          placeholder="Full Name"
          value={newCustomer.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={handleChange}
        />
                <input
          type="email"
          className="form-control mb-2"
          name="phone"
          placeholder="Phone"
          value={newCustomer.phone}
          onChange={handleChange}
        />
                <input
          type="email"
          className="form-control mb-2"
          name="address"
          placeholder="Address"
          value={newCustomer.address}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleAddCustomer}style={{ backgroundColor: "#F96E2A", color: "#fff" }}>
          Add Customer
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust._id}>
              <td>{cust.fullName}</td>
              <td>{cust.email}</td>
              <td>{cust.phone}</td>
              <td>{cust.address}</td>
              <td><button
                className="btn btn-warning btn-sm me-2"
                onClick={() => setEditingCustomer(cust)} // 👈 Open modal
              >
                Edit
              </button>
                </td>
              <td><button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(cust._id)}>
                Delete
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingCustomer && (
        <UpdateCustomerForm
          customer={editingCustomer}
          onUpdate={() => {
            setEditingCustomer(null);
            fetchCustomers(); // Refresh list
          }}
          onCancel={() => setEditingCustomer(null)}
        />
      )}
    </div>
  );
}

export default CustomerList;
