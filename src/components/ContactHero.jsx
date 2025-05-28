import React from 'react';
import './ContactHero.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPen, FaRegEnvelope, FaSearch } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
    <div className="contact-hero-banner">
    <div className="contact-hero-text">
    <div className="contact-hero-line"></div>
          <span className="contact-hero-subtitle">CONTACT US</span>
          <h2 className="contact-hero-title">
            Get In Touch <br /> With Us
          </h2>
        </div>
        <div className="contact-hero-form-container">
          <form className="contact-hero-form">
            <label>Name</label>
            <div className="contact-hero-input-wrapper">
              <input type="text" placeholder="Your Name Here" />
              <FaPen className="contact-hero-icon" />
            </div>

            <label>Email</label>
            <div className="contact-hero-input-wrapper">
              <input type="email" placeholder="Your Email Here" />
              <FaRegEnvelope className="contact-hero-icon" />
            </div>

            <label>Message</label>
            <div className="contact-hero-input-wrapper textarea">
              <textarea placeholder="Your Message Here"></textarea>
              <FaSearch className="contact-hero-icon" />
            </div>

            <button type="submit" className="contact-hero-submit">
              Check Availability <span className="contact-arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      <div className="contact-info-area">
        <div className="contact-map">
          <div className="contact-map-label">
            <h4>Imperial Grand Hotel</h4>
            <p>1250 West 6th Ave, New York, NY 10036, United States</p>
            <div className="map-rating">⭐ 4.8 — 208,443 Reviewers</div>
          </div>
          <FaMapMarkerAlt className="contact-map-marker" />
          <div className="contact-map-controls">
            <div className="square-placeholder" />
            <div className="map-buttons">
              <button>+</button>
              <button>−</button>
            </div>
          </div>
        </div>

        <div className="contact-details">
          <span className="contact-info-subtitle">CONTACT INFO</span>
          <h3 className="contact-info-title">Contact Us</h3>

          <div className="contact-info-block">
            <FaEnvelope className="contact-info-icon" />
            <div>
              <p>Email Address</p>
              <span>info@gptxstudio</span>
            </div>
          </div>

          <div className="contact-info-block">
            <FaMapMarkerAlt className="contact-info-icon" />
            <div>
              <p>Hotel Location</p>
              <span>1250 West 6th Ave, New York, NY 10036, United States</span>
            </div>
          </div>

          <div className="contact-info-block">
            <FaPhoneAlt className="contact-info-icon" />
            <div>
              <p>Phone Number</p>
              <span>+0123456789</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
