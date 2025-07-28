import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import AdminPanel from '../pages/AdminPanel.jsx';
import Unauthorized from '../pages/Unauthorized.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute roles={[2]}>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute roles={[1]}>
              <AdminPanel />
            </PrivateRoute>
          } 
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}
