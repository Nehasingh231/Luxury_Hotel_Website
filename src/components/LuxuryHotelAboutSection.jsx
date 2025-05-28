import React from 'react';
import './LuxuryHotelAboutSection.css';
import { FaPlay } from 'react-icons/fa';

const LuxuryHotelAboutSection = () => {
  return (
    <section className="luxabout-container">
      <div className="luxabout-wrapper">
        <div className="luxabout-left">
          <div className="luxabout-play-button">
            <FaPlay className="luxabout-play-icon" />
          </div>
        </div>

        <div className="luxabout-right">
          <div className="luxabout-heading-line"></div>
          <p className="luxabout-subtitle">DISCOVER OUR HOTEL</p>
          <h2 className="luxabout-title">Enjoy A Luxury Experience</h2>
          <p className="luxabout-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="luxabout-discover-link">
            <a href="#">Discover More</a>
            <span className="luxabout-arrow">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHotelAboutSection;
