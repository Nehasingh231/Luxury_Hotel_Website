import React from 'react';
import './LuxuryExperienceIntro.css';
import { FaUserTie, FaHotel, FaBed, FaConciergeBell } from 'react-icons/fa';

const LuxuryExperienceIntro = () => {
  return (
    <div className="luxury-intro-container">
      <div className="luxury-intro-image">
        <div className="luxury-intro-play-button">
          <span>►</span>
        </div>
      </div>
      <div className="luxury-intro-content">
       <div className="luxury-vertical-line"></div>
        <p className="luxury-intro-section-tag">DISCOVER OUR HOTEL</p>
        <h1 className="luxury-intro-headline"> Enjoy A Luxury<br />
  Experience</h1>
        <p className="luxury-intro-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className="luxury-intro-stats-grid">
          <div className="luxury-intro-stat-item">
            <FaUserTie className="luxury-intro-icon luxury-intro-highlight" />
            <div>
              <p className="luxury-intro-stat-title">Employee</p>
              <p className="luxury-intro-stat-value luxury-intro-highlight">150+</p>
            </div>
          </div>
          <div className="luxury-intro-stat-item">
            <FaHotel className="luxury-intro-icon" />
            <div>
              <p className="luxury-intro-stat-title">Facility</p>
              <p className="luxury-intro-stat-value">12</p>
            </div>
          </div>
          <div className="luxury-intro-stat-item">
            <FaBed className="luxury-intro-icon luxury-intro-muted" />
            <div>
              <p className="luxury-intro-stat-title">Room</p>
              <p className="luxury-intro-stat-value luxury-intro-muted">200+</p>
            </div>
          </div>
          <div className="luxury-intro-stat-item">
            <FaConciergeBell className="luxury-intro-icon luxury-intro-muted" />
            <div>
              <p className="luxury-intro-stat-title">Receptionist</p>
              <p className="luxury-intro-stat-value luxury-intro-muted">24 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExperienceIntro;