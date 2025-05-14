import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ element, roles }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
 
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && !roles.includes(user.role)) {
 
    return <Navigate to="/" state={{ from: location }} replace />;
  }


  return element;
}

export default PrivateRoute;
