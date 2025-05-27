import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay">
        <div className="testimonial-header">
          <div className="line"></div>
          <p className="subtitle">OUR CUSTOMER REVIEW</p>
          <h2 className="title">What Our Client Says</h2>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image-placeholder"></div>

          <div className="testimonial-content">
            <div className="testimonial-top">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              </p>
            </div>

            <div className="testimonial-bottom">
              <p className="testimonial-author">Jackson Dean</p>
              <p className="testimonial-role">Guest</p>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
