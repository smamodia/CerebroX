import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext"; // Assuming UserContext manages global state

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // Get current user state

  // If there's no token in localStorage or the user is not logged in, redirect to login
  if (!localStorage.getItem("token") || !user) {
    return <Navigate to="/login" />;
  }

  return children; 
};

export default ProtectedRoute;
