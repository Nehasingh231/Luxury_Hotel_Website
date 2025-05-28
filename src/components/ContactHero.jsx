import React, { useState } from 'react';
import './ContactHero.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPen, FaRegEnvelope, FaSearch } from 'react-icons/fa';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name);
  };

  const validateField = (fieldName) => {
    let error = '';
    const value = formData[fieldName].trim();

    if (!value) {
      error = 'This field is required';
    } else if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email';
    }

    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };

  const validateForm = () => {
    validateField('name');
    validateField('email');
    validateField('message');
    
    return !errors.name && !errors.email && !errors.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched on submit
    setTouched({
      name: true,
      email: true,
      message: true
    });

    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    } catch (error) {
      console.error('There was an error submitting your form:', error);
  alert('There was an error submitting your form. Please try again.');
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {submitSuccess ? (
            <div className="contact-success-message">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you soon.</p>
              <button 
                className="contact-hero-submit"
                onClick={() => setSubmitSuccess(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-hero-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <div className={`contact-hero-input-wrapper ${touched.name && errors.name ? 'error' : ''}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name Here"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FaPen className="contact-hero-icon" />
              </div>
              {touched.name && errors.name && (
                <div className="error-container">
                  <span className="error-message">{errors.name}</span>
                </div>
              )}

              <label>Email</label>
              <div className={`contact-hero-input-wrapper ${touched.email && errors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Here"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FaRegEnvelope className="contact-hero-icon" />
              </div>
              {touched.email && errors.email && (
                <div className="error-container">
                  <span className="error-message">{errors.email}</span>
                </div>
              )}

              <label>Message</label>
              <div className={`contact-hero-input-wrapper textarea ${touched.message && errors.message ? 'error' : ''}`}>
                <textarea
                  name="message"
                  placeholder="Your Message Here"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                <FaSearch className="contact-hero-icon" />
              </div>
              {touched.message && errors.message && (
                <div className="error-container">
                  <span className="error-message">{errors.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="contact-hero-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Check Availability'}
                <span className="contact-arrow">→</span>
              </button>
            </form>
          )}
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
              <span>info@imperialgrand.com</span>
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
              <span>+1 (212) 555-0123</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;