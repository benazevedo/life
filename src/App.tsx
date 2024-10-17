import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/landing-page';
import MenuPage from './screens/menu-page'; // Create this component
import SpaceEffect from './components/space-effect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/stars" element={<SpaceEffect />} />
      </Routes>
    </Router>
  );
}

export default App;
