import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/public/HomePage';
import OwnerDashboardPage from './pages/owner/OwnerDashboardPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Owner Portal Routes */}
        <Route path="/owner" element={<Navigate to="/owner/dashboard" replace />} />
        <Route path="/owner/dashboard" element={<OwnerDashboardPage />} />

        {/* Fallback route for all navigation */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
