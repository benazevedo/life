import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/landing-page';
import MenuPage from './screens/menu-page';
import ForumPage from './screens/forum-page';
import ShopPage from './screens/shop-page';
import AboutPage from './screens/about-page';
import ContactPage from './screens/contact-page';
import ProductDetailsPage from './screens/product-details-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:title" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
