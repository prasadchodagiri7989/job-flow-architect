import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  adminOnly = false,
}) => {
  // ✅ Get user from localStorage
  const storedUser = localStorage.getItem("nmhr-user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  console.log("ProtectedRoute:", isAuthenticated, isAdmin);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
