import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SingleRoomHero.css";

const SingleRoomHero = () => {
  return (
    <section className="srh-hero">
      {/* Left Arrow */}
      <button className="srh-nav-button srh-left">
        <FaChevronLeft className="srh-icon" />
      </button>

      {/* Right Arrow */}
      <button className="srh-nav-button srh-right">
        <FaChevronRight className="srh-icon" />
      </button>
 
      {/* Dots Navigation */}
      <div className="srh-dots">
        <span className="srh-dot"></span>
        <span className="srh-dot srh-dot-active"></span>
        <span className="srh-dot"></span>
      </div>
    </section>
  );
};

export default SingleRoomHero;
