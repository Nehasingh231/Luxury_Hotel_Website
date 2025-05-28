import React from 'react';
import './testimonial.css';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-line" />
        <p className="testimonial-subtitle">Our Customer Review</p>
        <h2 className="testimonial-title">What Our Client Says</h2>
      </div>

      <div className="testimonial-card-wrapper">
        <div className="testimonial-image-placeholder" />
        <div className="testimonial-card">
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="testimonial-star" />
            ))}
          </div>
          <p className="testimonial-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
          </p>
          <div className="testimonial-author">
            <span className="testimonial-name">Jackson Dean</span>
            <span className="testimonial-role">Guest</span>
          </div>
        </div>
      </div>

      <div className="testimonial-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Testimonial;
