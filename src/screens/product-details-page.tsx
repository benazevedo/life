import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScreenWrapper from '../components/screen-wrapper';
import './product-details-page.css';
import data from '../data/shopdata.json';
import OptionButton from '../components/option-button';

const ProductDetailsPage = () => {
  const { title } = useParams<{ title: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState<string | null>(null); // New state for selected option
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const decodeTitle = (encodedTitle: string) => {
    return encodedTitle.replace(/-/g, ' ');
  };

  useEffect(() => {
    const decodedTitle = decodeTitle(title || '');
    const foundProduct = data.find((item) => item.title === decodedTitle);
    setProduct(foundProduct);
    setMainImage(foundProduct?.images[0] || null);
    setOption(foundProduct?.sizes[0] || null);
  }, [title]);

  const handleGlobe = () => {
    setClicked(true);
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleOptionClick = (selectedOption: string) => {
    setOption(selectedOption); // Update the selected option
  };

  if (!product) {
    return <div>Loading...</div>;
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
            src={mainImage || ''}
            alt={product.title}
            className="product-main-image"
          />
          <div className="product-thumbnails">
            {product.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  mainImage === image ? 'selected-thumbnail' : ''
                }`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
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
          {product.sizes.length > 0 && (
            <div className="info-section-sizes">
              <div className="info-section-label">SIZES</div>
              <div className="sizes-list">
                {product.sizes.map((size: string) => (
                  <OptionButton
                    key={size}
                    label={size}
                    selected={option === size}
                    onClick={() => handleOptionClick(size)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="info-section">
            <div className="info-section-label">QUANTITY</div>
            <div className="quantity-selector">
              <div
                className="quantity-button"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </div>
              <span>{quantity}</span>
              <div
                className="quantity-button"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </div>
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
