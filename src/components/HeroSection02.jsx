import React from 'react';
import './HeroSection02.css'

function HeroSection02() {
  return (
    <div className="hotel-homepage">
    <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-subheading">BEST PLACE TO RELAX & ENJOY</h2>
          <h1 className="hero-heading">Perfect Place to Enjoy Your Life</h1>
          
          <div className="rating">
            <span className="rating-text">4.8 Rated Around The World</span>
            <span className="stars">★★★★★</span>
          </div>
          
          <div className="slider-dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        
        {/* Booking Form */}
        <div className="booking-form">
          <h3>Check Availability</h3>
          <div className="form-group">
            <label htmlFor="check-in">Check In</label>
            <input type="date" id="check-in" />
          </div>
          <div className="form-group">
            <label htmlFor="check-out">Check Out</label>
            <input type="date" id="check-out" />
          </div>
          <div className="form-group">
            <label htmlFor="room">Room</label>
            <select id="room">
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Suite</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guest">Guest</label>
            <select id="guest">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>Family</option>
            </select>
          </div>
          <button className="check-availability">Check Availability</button>
        </div>
      </section>
      
      {/* Discover Section */}
      <section className="discover-section">
        <div className="video-placeholder">
          <div className="play-button"></div>
        </div>
        <div className="discover-content">
          <h2 className="discover-subheading">DISCOVER OUR HOTEL</h2>
          <h1 className="discover-heading">Enjoy A Luxury Experience</h1>
          <p className="discover-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </section>
    </div>
    
  )
}

export default HeroSection02