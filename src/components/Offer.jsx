import React from 'react';
import './Offer.css';

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-content">
        <h1>Get A Luxurious Experience</h1>
        <h2>With 25% Off Now</h2>
      </div>
      <div className="offer-button">
        <button>
          <span>Book Now</span>
          <span className="offer-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Offer;
