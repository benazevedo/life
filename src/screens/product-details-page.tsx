import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to get dynamic parameters
import './product-details-page.css';

const ProductDetailsPage = () => {
  const { title } = useParams<{ title: string }>(); // Get the dynamic title from the route

  return (
    <div>
      <h1>{title}</h1>
      <p>Details for the card titled "{title}" will go here.</p>
      {/* Add more content related to the card */}
    </div>
  );
};

export default ProductDetailsPage;
