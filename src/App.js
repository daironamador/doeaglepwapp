import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Player from './Player';
import LandingPage from './LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Player at root URL */}
        <Route path="/" element={<Player />} />

        {/* New Landing Page at /landing */}
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
