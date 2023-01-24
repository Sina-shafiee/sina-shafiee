import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const user = 'sina';

  if (!user) {
    return <Navigate to='/dashboard/login' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
