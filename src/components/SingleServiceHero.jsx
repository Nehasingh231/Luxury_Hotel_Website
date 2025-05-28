import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SingleServiceHero.css";

const SingleServiceHero = () => {
  return (
    <section className="ssh-hero">
      {/* Left Arrow */}
      <button className="ssh-nav-button ssh-left">
        <FaChevronLeft className="ssh-icon" />
      </button>

      {/* Right Arrow */}
      <button className="ssh-nav-button ssh-right">
        <FaChevronRight className="ssh-icon" />
      </button>
 
      {/* Dots Navigation */}
      <div className="ssh-dots">
        <span className="ssh-dot"></span>
        <span className="ssh-dot ssh-dot-active"></span>
        <span className="ssh-dot"></span>
      </div>
    </section>
  );
};

export default SingleServiceHero;