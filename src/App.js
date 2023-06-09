import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
