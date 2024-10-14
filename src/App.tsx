import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/landing-page';
import MenuPage from './screens/menu-page'; // Create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="app-border-wrapper">
//       <div className="app-content">
//         <LandingPage />
//       </div>
//     </div>
//   );
// }
