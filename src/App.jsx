import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Quarto from './pages/quarto';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quarto/:id" element={<Quarto />} />
        </Routes>
    </Router>
  );
}

export default App;
