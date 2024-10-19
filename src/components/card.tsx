import React from 'react';
import './card.css';

interface ICard {
  price: number;
  image: string;
  title: string;
}

const Card = ({ price, image, title }: ICard) => {
  return (
    <div className="card">
      <div className="card-price">${String(price)}</div>
      <img src={image} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
      <div className="card-button">BUY</div>
    </div>
  );
};

export default Card;
