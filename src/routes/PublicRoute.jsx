import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location, from);
  const { user, loading } = useAuth();
  console.log(loading);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return children;
  }
  return <Navigate to={from} replace={true} />;
};

export default PublicRoute;
