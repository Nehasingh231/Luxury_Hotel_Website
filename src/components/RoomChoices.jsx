import React from "react";
import "./RommChoices.css";

const RoomChoices = () => {
  return (
      <section className="luxury-room-section">
           <div className="line-container">  
  <div className="vertical-line"></div>
</div>
 <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{ color: "#d4af37", letterSpacing: "2px", marginBottom: "10px", fontSize: "14px" }}>
          Our Room Choices
        </p>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
          Luxury Rooms & Suites
        </h2>
      </div>
      <div className="room-content">
        <div className="choices-room-card">
          <h4 className="room-title">Superior Suite</h4>
          <p className="room-price">$320 / night</p>
          <div className="room-features">
            <span>🛏 2 Persons</span>
            <span>🛁 Bathtub</span>
            <span>🍽 Free Breakfast</span>
            <span>🛏 King Size Bed</span>
            <span>📶 Free WiFi</span>
            <span>❄️ Air Conditioner</span>
          </div>
          <button className="choices-book-now">Book Now</button>
        </div>
 <div className="slider-navigation">
    <button className="slider-arrow left">‹</button>
    <button className="slider-arrow right">›</button>
  </div>

        <div className="room-image-placeholder" />
        <div className="slider-dots">
    <div className="dot active"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
      </div>
    </section>
  );
};

export default RoomChoices;