import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
import './shop-page.css';
import Card from '../components/card';
import data from '../data/shopdata.json';

function ShopPage() {
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
      <div className="content-container">
        <Card
          price={data[0].price}
          image={data[0].images[0]}
          title={data[0].title}
        />
      </div>
    </ScreenWrapper>
  );
}

export default ShopPage;
