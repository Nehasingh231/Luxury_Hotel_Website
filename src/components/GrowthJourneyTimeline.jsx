import React from 'react';
import './GrowthJourneyTimeline.css';
import { FaHotel } from 'react-icons/fa';

const GrowthJourneyTimeline = () => {
  return (
    <div className="timeline-section">
      <div className="timeline-header">
        <div className="growth-vertical-line"></div>
        <p className="growth-section-tag">ABOUT TIMELINE</p>
      </div>
      <h2 className="timeline-title">Our Growth Journey</h2>

      <div className="timeline-bar">
        <div className="timeline-year active">2000</div>
        <div className="timeline-year">2006</div>
        <div className="timeline-year selected">2012</div>
        <div className="timeline-year">2018</div>
        <div className="timeline-year">2023</div>
        <div className="timeline-line"></div>
      </div>

      <div className="timeline-content">
        <div className="timeline-card">
          <div className="timeline-card-left"></div>
          <div className="timeline-card-right">
            <div className="timeline-icon"><FaHotel /></div>
            <h4>Guest & Service Improvement</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthJourneyTimeline;
