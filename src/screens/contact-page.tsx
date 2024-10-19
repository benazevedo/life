import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
import './contact-page.css';

function ContactPage() {
  const [clicked, setClicked] = useState(false); // State to manage the click event
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle "PRESS START" click
  const handleGlobe = () => {
    setClicked(true); // Start the animation

    // Delay for the effect duration, then navigate to the menu page
    setTimeout(() => {
      navigate(-1);
    }, 1000); // Adjust time to match the animation duration
  };
  return (
    <ScreenWrapper>
      <img
        className={`top-left-image ${clicked ? 'clicked' : ''}`}
        onClick={() => handleGlobe()}
        src="https://dwvo2npct47gg.cloudfront.net/gifs/awge-home.gif"
        alt="Home button spinning globe"
      />
      <div className="menu-page-container">
        <h1 style={{ color: 'red', fontSize: '5rem' }}>CONTACT</h1>
        <h6 style={{ color: 'red', fontSize: '1rem' }}>(COMING SOON)</h6>
      </div>
    </ScreenWrapper>
  );
}

export default ContactPage;
