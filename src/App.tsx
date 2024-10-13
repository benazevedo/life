import React from 'react';
import './App.css'; // For global styles
import LandingPage from './screens/landing-page';

function App() {
  return (
    <div className="app-border-wrapper">
      <div className="app-content">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
