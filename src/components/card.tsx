import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './card.css';

interface ICard {
  price: number;
  images: string[];
  title: string;
}

const Card = ({ price, images, title }: ICard) => {
  const [currentImage, setCurrentImage] = useState(images[0]); // Set initial image
  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle mouse hover to switch images or flip the single image
  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentImage(images[1]); // Change to second image on hover if there's more than 1 image
    }
  };

  const handleMouseLeave = () => {
    if (images.length > 1) {
      setCurrentImage(images[0]); // Revert back to first image when hover ends
    }
  };

  // Utility function to convert title to a URL-friendly string
  const formatTitleForUrl = (title: string) => {
    return title.replace(/\s+/g, '-'); // Replace spaces with hyphens
  };

  // Handle click to navigate to the card's dynamic page
  const handleCardClick = () => {
    const formattedTitle = formatTitleForUrl(title);
    navigate(`/${formattedTitle}`); // Navigate to the dynamic route
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-title">{title}</div>
      <img
        src={currentImage}
        alt={title}
        className={`card-image ${images.length === 1 ? 'flip-image' : ''}`} // Add flipping class if only 1 image
        onMouseEnter={handleMouseEnter} // Handle hover start
        onMouseLeave={handleMouseLeave} // Handle hover end
      />
      <div className="card-price">${String(price)}</div>
      <div className="card-button">BUY</div>
    </div>
  );
};

export default Card;
