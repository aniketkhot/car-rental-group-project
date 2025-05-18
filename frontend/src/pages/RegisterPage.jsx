import React, { useState } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", formData);
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
        fontFamily: 'Roboto Slab, serif',
        backgroundColor: '#FBF8EF',
        padding: '20px',
      }}
    >
      <div className="content-box" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
          <input
            name="securityQuestion"
            className="form-control mb-2"
            placeholder="Setting security question"
            value={formData.securityQuestion}
            onChange={handleChange}
            required
          />
          <input
            name="securityAnswer"
            className="form-control mb-2"
            placeholder="Answer to security question"
            value={formData.securityAnswer}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#F96E2A',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1em',
              marginTop: '10px'
            }}
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;