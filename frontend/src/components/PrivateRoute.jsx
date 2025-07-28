// src/components/PrivateRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const token = localStorage.getItem('token');
  const userRole = Number(localStorage.getItem('rol'));
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
