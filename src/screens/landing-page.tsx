import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
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
    <ScreenWrapper>
      <div className="life-page-container">
        <div className="life">
          <span>L</span>
          <span>.</span>
          <span>i</span>
          <span>.</span>
          <span>F</span>
          <span>.</span>
          <span>E</span>
          <span>.</span>
        </div>
        <div
          className={`press-start ${clicked ? 'clicked' : ''}`} // Add "clicked" class if clicked
          onClick={handlePressStart}
        >
          <span className="greater-than">&gt;</span> PRESS START
        </div>
      </div>
    </ScreenWrapper>
  );
}

export default LandingPage;
