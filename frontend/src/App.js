import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CustomerList from "./components/CustomerList";
import RentalList from "./components/RentalList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CustomerDashboard from "./components/CustomerDashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/landingpages";

import SearchPage from './pages/SearchPage';
import Checkout from './pages/Checkout';
import AfterSearch from './pages/AfterSearch';

import CustomerDashboard from "./components/CustomerDashboard";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import CarDetails from './components/CarDetails';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/dashboard"
              element={<PrivateRoute element={<CustomerDashboard />} />}
            />
            <Route
              path="/cars"
              element={<PrivateRoute element={<CarList />} roles={['admin']} />}
            />
            <Route
              path="/customers"
              element={<PrivateRoute element={<CustomerList />} roles={['admin']} />}
            />
            <Route
              path="/rentals"
              element={<PrivateRoute element={<RentalList />} roles={['admin']} />}
            />

            <Route
              path="/search"
              element={<PrivateRoute element={<SearchPage />} />}
            />
            <Route
              path="/afterSearch"
              element={<PrivateRoute element={<AfterSearch />} />}
            />
            <Route
              path="/checkout"
              element={<PrivateRoute element={<Checkout />} />}
            />

            <Route
              path="/customer-dashboard"
              element={<PrivateRoute element={<CustomerDashboard />} />}
            />
             <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            <Route path="/cars/:id" element={<CarDetails />} />

          </Routes>
          
        </div>
        <footer
                style={{
                  marginTop: "20px",
                  backgroundColor: "#78B3CE",
                  padding: "10px",
                  textAlign: "center",
                  fontFamily: 'Roboto Slab, serif',
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <div style={{ marginBottom: "10px" }}>FOLLOW US ON OUR SOCIAL NETWORKS</div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap", 
                  }}
                >
              
                  <img src="discord.png" alt="discord" style={{ width: "50px", height: "50px" }} />
                  <img src="facebook.png" alt="facebook" style={{ width: "50px", height: "50px" }} />
                  <img src="google.png" alt="google" style={{ width: "50px", height: "50px" }} />
                  <img src="ins.png" alt="Instagram" style={{ width: "50px", height: "50px" }} />
                </div>
              </footer>
      </AuthProvider>
    </Router>
  );
}

export default App;