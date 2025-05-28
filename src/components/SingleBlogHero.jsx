import React from 'react';
import './SingleBlogHero.css';
import { FaTwitter, FaFacebookF, FaYoutube, FaCalendarAlt } from 'react-icons/fa';

const SingleBlogHero = () => {
  return (
    <div className="singleblog-hero">
      <div className="singleblog-hero-container">
        <div className="singleblog-left">
          <p className="singleblog-subheading">Our Blog Detail</p>
          <h1 className="singleblog-title">
            Luxury Bathroom Interior <br /> Styles For You
          </h1>
          <div className="singleblog-meta">
            <div className="singleblog-author">
              <div className="singleblog-avatar"></div>
              <span>Luna Wynne</span>
            </div>
            <div className="singleblog-date">
              <FaCalendarAlt className="calendar-icon" />
              <span>20 December 2023</span>
            </div>
          </div>
        </div>

        <div className="singleblog-right">
          <div className="singleblog-socials">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHero;
