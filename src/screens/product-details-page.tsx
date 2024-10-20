import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScreenWrapper from '../components/screen-wrapper';
import './product-details-page.css';
import data from '../data/shopdata.json';
import OptionButton from '../components/option-button';

const ProductDetailsPage = () => {
  const { title } = useParams<{ title: string }>(); // Get the dynamic title from the route
  const [product, setProduct] = useState<any | null>(null); // State to hold the product details
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // Decode the title by replacing hyphens with spaces
  const decodeTitle = (encodedTitle: string) => {
    return encodedTitle.replace(/-/g, ' ');
  };

  // Find the product based on the decoded title
  useEffect(() => {
    const decodedTitle = decodeTitle(title || ''); // Decode the title
    const foundProduct = data.find((item) => item.title === decodedTitle);
    setProduct(foundProduct); // Set the found product in state
  }, [title]);

  // Handle globe click animation and navigation
  const handleGlobe = () => {
    setClicked(true);
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  // Handle quantity increase and decrease
  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount)); // Ensure quantity never goes below 1
  };

  if (!product) {
    return <div>Loading...</div>; // Handle case when product is not found yet
  }

  return (
    <ScreenWrapper>
      <img
        className={`top-left-image ${clicked ? 'clicked' : ''}`}
        onClick={() => handleGlobe()}
        src="https://dwvo2npct47gg.cloudfront.net/gifs/awge-home.gif"
        alt="Home div spinning globe"
      />
      <div className="product-details-container">
        <div className="product-image-left">
          <img
            src={product.images[0]}
            alt={product.title}
            className="product-main-image"
          />
        </div>

        <div className="product-details-right">
          <div className="info-section">
            <div className="info-section-label">L.i.F.E.</div>
            <div className="title-label">{product.title}</div>
          </div>
          <div className="info-section">
            <div className="price-label">${product.price}.00 USD</div>
            <div className="description-label">{product.description}</div>
          </div>
          <div className="info-section">
            <div className="info-section-label">SIZES</div>
            <div className="sizes-list">
              {product.sizes.length > 0 &&
                product.sizes.map((size: string) => (
                  <OptionButton label={size} />
                ))}
            </div>
          </div>
          <div className="info-section">
            <div className="info-section-label">QUANTITY</div>
            <div className="quantity-selector">
              <div onClick={() => handleQuantityChange(-1)}>-</div>
              <span>{quantity}</span>
              <div onClick={() => handleQuantityChange(1)}>+</div>
            </div>
          </div>
          <div className="info-section">
            <div className="add-to-cart-btn">Add to Cart</div>
            <div className="buy-now-btn">Buy Now</div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default ProductDetailsPage;
