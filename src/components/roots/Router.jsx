import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../Login';
import Products from '../Products';

// Component to protect routes
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const Routes = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/products"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Products />
          </ProtectedRoute>
        }
      />
    </RouterRoutes>
  );
};

export default Routes;
