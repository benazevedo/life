import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
import './shop-page.css';
import Card from '../components/card';
import data from '../data/shopdata.json';

function ShopPage() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleGlobe = () => {
    setClicked(true);
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  return (
    <ScreenWrapper>
      <img
        className={`top-left-image ${clicked ? 'clicked' : ''}`}
        onClick={() => handleGlobe()}
        src="https://dwvo2npct47gg.cloudfront.net/gifs/awge-home.gif"
        alt="Home button spinning globe"
      />
      <div className="shop-content-container">
        {data.map((item) => (
          <Card
            key={item.id}
            price={item.price}
            images={item.images}
            title={item.title}
          />
        ))}
      </div>
    </ScreenWrapper>
  );
}

export default ShopPage;
