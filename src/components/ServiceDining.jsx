import React from 'react';
import './ServiceDining.css';
import { FaClock } from 'react-icons/fa';

const ServiceDining = () => {
  return (
    <div className="serviceDining-container">
      <h2 className="serviceDining-title">Multiple Cuisines & Beverages</h2>

      <div className="serviceDining-content">
        <div className="serviceDining-image-section">
          <div className="serviceDining-image-placeholder"></div>
          <div className="serviceDining-deal-tag">
            <p className="serviceDining-deal-title">Best Deals</p>
            <p className="serviceDining-deal-desc">Grilled Ribeye Beef</p>
          </div>
        </div>

        <div className="serviceDining-info-section">
          <p className="serviceDining-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <p className="serviceDining-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="serviceDining-hours">
            <h4>Hours</h4>
            <ul>
              <li><FaClock className="serviceDining-icon" /> Breakfast : 07:00 AM – 11:00 AM (Daily)</li>
              <li><FaClock className="serviceDining-icon" /> Lunch : 12:00 PM – 02:00 PM (Daily)</li>
              <li><FaClock className="serviceDining-icon" /> Dinner : 06:30 PM – 10:00 PM (Daily)</li>
            </ul>
          </div>

          <div className="serviceDining-details">
            <h4>Dresscode</h4>
            <p>Smart Casual ( No Shorts, No Hats, or Sandals Permitted )</p>

            <h4>Terrace</h4>
            <p>Open For Drinks Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDining;
