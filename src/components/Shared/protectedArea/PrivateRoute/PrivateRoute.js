import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  let location = useLocation();
  if (isLoading) {
    return (
      <img
        src="https://jthemes.net/themes/html/medservices/files/images/loader.gif"
        alt="loader"
      />
    );
  }
  if (!user?.email) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
