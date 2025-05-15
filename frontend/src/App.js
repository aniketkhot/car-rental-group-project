import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CustomerList from "./components/CustomerList";
import RentalList from "./components/RentalList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/landingpages";
import CustomerDashboard from "./components/CustomerDashboard";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

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
              path="/customer-dashboard"
              element={<PrivateRoute element={<CustomerDashboard />} />}
              
            />
             <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>
    
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;