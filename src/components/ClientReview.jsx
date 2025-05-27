import React from "react";
import "./ClientReview.css";

const ClientReview = () => {
  return (
    <section className="client-review">
      <div className="review-container">
        <div className="vertical-line"></div>
        <p className="subtitle">OUR CUSTOMER REVIEW</p>
        <h2 className="title">What Our Client Says</h2>

        <div className="stars">★★★★★</div>

        <p className="review-text">
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”
        </p>

        <div className="profile">
          <div className="avatar"></div>
          <div className="info">
            <p className="name">Jackson Dean</p>
            <p className="role">Guest</p>
          </div>
        </div>

        <div className="navigation">
          
          <span className="dots">
          <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </span>
         
        </div>
      </div>
    </section>
  );
};

export default ClientReview;