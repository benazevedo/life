import React, { useState } from 'react';
import './card.css';

interface ICard {
  price: number;
  images: string[];
  title: string;
}

const Card: React.FC<ICard> = ({ price, images, title }) => {
  const [currentImage, setCurrentImage] = useState(images[0]); // Set initial image

  const handleMouseEnter = () => {
    setCurrentImage(images[1]); // Change to second image on hover
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[0]); // Revert back to first image when hover ends
  };

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <img
        src={currentImage}
        alt={title}
        className="card-image"
        onMouseEnter={handleMouseEnter} // Handle hover start
        onMouseLeave={handleMouseLeave} // Handle hover end
      />
      <div className="card-price">${String(price)}</div>
      <div className="card-button">BUY</div>
    </div>
  );
};

export default Card;
