import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to='/dashboard/login' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
