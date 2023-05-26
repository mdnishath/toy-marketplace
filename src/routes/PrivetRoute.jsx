import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();
  console.log(loading);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
};

export default PrivetRoute;
