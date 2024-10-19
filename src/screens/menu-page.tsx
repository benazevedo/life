import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
import './menu-page.css';

function MenuPage() {
  const [clicked, setClicked] = useState(false); // State to manage the click event
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle "PRESS START" click
  const handleGlobe = () => {
    setClicked(true); // Start the animation

    // Delay for the effect duration, then navigate to the menu page
    setTimeout(() => {
      navigate('/');
    }, 1000); // Adjust time to match the animation duration
  };

  const handleNavigation = (destination: string) => {
    navigate(`/${destination}`);
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
        <div className="menu-title">{'L.i.F.E.'}</div>
        <div className="menu-options">
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/awgeForum.gif"
              alt="Forum Icon"
              onClick={() => handleNavigation('forum')}
            />
            <h3
              className="menu-item-text forum-text"
              onClick={() => handleNavigation('forum')}
            >
              FORUM
            </h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/hats_2.gif"
              alt="Shop Icon"
              onClick={() => handleNavigation('shop')}
            />
            <h3
              className="menu-item-text shop-text"
              onClick={() => handleNavigation('shop')}
            >
              SHOP
            </h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/question-block-red.gif"
              alt="About Icon"
              onClick={() => handleNavigation('about')}
            />
            <h3
              className="menu-item-text about-text"
              onClick={() => handleNavigation('about')}
            >
              ABOUT
            </h3>
          </div>
          <div className="menu-item">
            <img
              className="menu-item-icon"
              src="https://dwvo2npct47gg.cloudfront.net/gifs/pager.gif"
              alt="Contact Icon"
              onClick={() => handleNavigation('contact')}
            />
            <h3
              className="menu-item-text contact-text"
              onClick={() => handleNavigation('contact')}
            >
              CONTACT
            </h3>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
}

export default MenuPage;
