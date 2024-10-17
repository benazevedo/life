import React from 'react';
import './menu-page.css';
import ScreenWrapper from '../components/screen-wrapper';

function MenuPage() {
  return (
    <ScreenWrapper>
      <img
        className="top-left-image"
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
