import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/customer-dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
      if (res.data) {
        login(res.data);
        navigate(from, { replace: true });
      }
    } catch (err) {
      alert("Login failed. Please check your credentials.");
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
        backgroundColor: '#FBF8EF',
        
        borderRadius: '10px',
        padding: '20px'
      }}
    >
      <div className="content-box" style={{ width: '100%', maxWidth: '400px' }}>
  
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>Welcome Back</h2>
        </div>
        
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            style={{
              padding: '4px 175px',
              backgroundColor: '#F96E2A',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1em',
            }}
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;