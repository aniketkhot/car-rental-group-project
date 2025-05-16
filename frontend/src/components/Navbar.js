import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isAdmin = user && user.role === 'admin'; 

  
  const commonStyle = {
    fontFamily: 'Roboto Slab, serif',
    fontSize: '16px', 
    color: '#333',    };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#78B3CE' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="./renteal_logo.png" alt="Car Rental System" style={{ height: '40px' }} />
        </NavLink>
        <div className="d-flex ms-auto">
          <ul className="navbar-nav">
            {user &&  (
              <>
                <li className="nav-item">
                  <span className="nav-link" style={commonStyle}>Welcome, {user.name}</span>
                </li>
    
                {user && user.role !== 'admin' && (
                          <>
                           
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/customer-dashboard" style={commonStyle}>
                                customer-dashboard
                              </NavLink>
                            </li>
                          </>
                        )}
                {isAdmin && (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cars" style={commonStyle}>
                        Cars
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/customers" style={commonStyle}>
                        Customers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/rentals" style={commonStyle}>
                        Rentals
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}

            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" style={commonStyle}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register" style={commonStyle}>
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                  style={commonStyle}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;