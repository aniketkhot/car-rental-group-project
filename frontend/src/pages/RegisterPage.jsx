import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/register", formData);
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      alert("Registration failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
           height: '100vh', 
        flexDirection: 'column',
        marginTop: 'flex',
        fontFamily: 'Roboto Slab, serif',
        backgroundColor: '#FBF8EF',
          
      }}
    >
      <div className="content-box" style={{ width: '100%', maxWidth: '400px'  }}>
      <div style={{ textAlign: 'center' ,fontFamily: 'Roboto Slab, serif',}}>
  <h2>New customers?</h2>
  <p>Welcome to join us</p>
</div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            className="form-control mb-2"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button  style={{
                padding: '4px 175px',
                backgroundColor: '#F96E2A',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1em',
              }}className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;