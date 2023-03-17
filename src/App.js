import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
