import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/public/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Fallback route for all navigation */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
