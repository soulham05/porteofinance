import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user, requiredRole }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  if (!user.allowedPages.includes(requiredRole)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PrivateRoute;