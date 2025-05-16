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
import SearchPage from "./pages/SearchPage";  
import CheckoutPage from "./pages/Checkout";
import AfterSearch from "./pages/AfterSearch";

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
              element={<PrivateRoute element={<CarList />} />}
            />
            <Route
              path="/customers"
              element={<PrivateRoute element={<CustomerList />} />}
            />
            <Route
              path="/rentals"
              element={<PrivateRoute element={<RentalList />} />}
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
              element={<PrivateRoute element={<CheckoutPage />} />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
