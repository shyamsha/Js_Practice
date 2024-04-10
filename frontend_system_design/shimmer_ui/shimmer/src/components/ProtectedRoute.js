import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  // Write Authentication Logic
  // Make login APi call, check if token valid
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
