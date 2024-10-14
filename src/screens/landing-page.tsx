import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import './landing-page.css';

function LandingPage() {
  const [clicked, setClicked] = useState(false); // State to manage the click event
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle "PRESS START" click
  const handlePressStart = () => {
    setClicked(true); // Start the animation

    // Delay for the effect duration, then navigate to the menu page
    setTimeout(() => {
      navigate('/menu');
    }, 1000); // Adjust time to match the animation duration
  };

  return (
    <div className="app-border-wrapper">
      <div className="app-border-spacer">
        <div className="app-content">
          <div className="landing-page-container">
            <div className="life">L.I.F.E.</div>
            <div
              className={`press-start ${clicked ? 'clicked' : ''}`} // Add "clicked" class if clicked
              onClick={handlePressStart}
            >
              <span className="greater-than">&gt;</span> PRESS START
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
