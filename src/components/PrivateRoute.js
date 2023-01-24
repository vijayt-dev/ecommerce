import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function PrivateRoute() {
  const auth = useAuth();
  const user = auth.getUserLogin();
  return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
