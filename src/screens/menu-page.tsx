import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
import './menu-page.css';

function MenuPage() {
  const [clicked, setClicked] = useState(false); // State to manage the click event
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle "PRESS START" click
  const handlePressStart = () => {
    setClicked(true); // Start the animation

    // Delay for the effect duration, then navigate to the menu page
    setTimeout(() => {
      navigate('/stars');
    }, 1000); // Adjust time to match the animation duration
  };
  return (
    <ScreenWrapper>
      <img
        className={`top-left-image ${clicked ? 'clicked' : ''}`}
        onClick={handlePressStart}
        src="https://dwvo2npct47gg.cloudfront.net/gifs/awge-home.gif"
        alt="Home button spinning globe"
      />
      <div className="menu-page-container">
        <div className="menu-title">{'L.I.F.E.'}</div>
        <div className="menu-options">
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/awgeForum.gif"
              alt="Forum Icon"
            />
            <h3 className="menu-item-text forum-text">FORUM</h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/awgeDVD.gif"
              alt="AWGE DVD Icon"
            />
            <h3 className="menu-item-text">DVD</h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/hats_2.gif"
              alt="Shop Icon"
            />
            <h3 className="menu-item-text shop-text">SHOP</h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/DBD-COVER1-reverse.gif"
              alt="A$AP ROCKY - DONT BE DUMB"
            />
            <h3 className="menu-item-text">A$AP</h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/question-block-red.gif"
              alt="About Icon"
            />
            <h3 className="menu-item-text about-text">ABOUT</h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/pager.gif"
              alt="Contact Icon"
            />
            <h3 className="menu-item-text shop-text">CONTACT</h3>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
}

export default MenuPage;
