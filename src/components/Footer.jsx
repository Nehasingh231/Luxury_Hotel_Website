import React, { useState } from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaDribbble, FaChevronRight } from "react-icons/fa";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

const Footer = () => {
 const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribed with email:", email); // Replace this with actual backend logic
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };


  return ( 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <div className="logo-title">
            <img src={logo} alt="Imperial Grand Hotel Logo" className="footer-logo" />
            <h2 className="hotel-name">IMPERIAL <br /><span>GRAND</span> HOTEL</h2>
          </div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-section links-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link to="/pages/room">ROOM</Link></li>
          </ul>
        </div>

        <div className="footer-section subscribe-section">
          <h3>SUBSCRIBE</h3>
          <p>Don't miss to subscribe our news, kindly fill the form below</p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Your Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="chevron-button" onClick={handleSubscribe}>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider-with-icons">
        <hr className="footer-divider" />
        <div className="footer-socials">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
          <FaDribbble />
        </div>
        <hr className="footer-divider" />
      </div>

      <div className="footer-bottom">
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
