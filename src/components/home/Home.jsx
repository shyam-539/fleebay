// src/components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // To navigate to the products page
import './home.css';

const Home = () => (
  <div className="hero-section">
    <div className="hero-content">
      <div className="text-side">
        <h1>Welcome to Fleebay</h1>
        <p>Your one-stop shop for amazing products!</p>
        <Link to="/products">
          <button className="cta-button">Shop Now</button>
        </Link>
      </div>
      <div className="image-side"></div>
    </div>
  </div>
);

export default Home;
