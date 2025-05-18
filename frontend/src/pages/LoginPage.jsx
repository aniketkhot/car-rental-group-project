import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/auth/login", {
      email,
      password,
    });
    console.log('login data send:', res.data); 
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("token", encodeURIComponent(res.data.token));

    if (res.data) {
      login(res.data); 

    
      const userRole = res.data.role; 
      if (userRole === 'admin') {
        navigate('/', { replace: true });
      } else if (userRole === 'user') {
        navigate('/customer-dashboard', { replace: true });
      } else {
        navigate(from, { replace: true }); 
      }
    }
  } catch (err) {
    alert("Login failed. Please check your credentials.");
  }
}
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
        fontFamily: 'Roboto Slab, serif',
        borderRadius: '10px',
        padding: '20px'
      }}
    >
      <div className="content-box" style={{ width: '100%', maxWidth: '400px' }}>
  
        <div style={{ textAlign: 'center', marginBottom: '20px',fontFamily: 'Roboto Slab, serif', }}>
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
            style={{ fontFamily: 'Roboto Slab, serif',}}
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
              fontFamily: 'Roboto Slab, serif',
            }}
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
            <Link
                to="/forgot-password"
                style={{
                  color: '#007bff',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontFamily: 'Roboto Slab, serif',
                }}
                >   
                Forgot Password?
              </Link>
</div>
      </div>
    
  );
}


export default LoginPage;