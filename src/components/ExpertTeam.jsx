// ExpertTeam.jsx
import React from "react";
import "./ExpertTeam.css";

const ExpertTeam = () => {
  return (
    <section className="expert-team-section">
      <div className="line-container">
        <div className="vertical-line"></div>
      </div>
      <div className="team-header">
        <p className="subheading">MEET OUR TEAM</p>
        <h2 className="heading">Expert Team Persons</h2>
      </div>

      <div className="team-carousel">
        <div className="carousel-blur left-blur"></div>

        <div className="team-member">
          <div className="member-image"></div>
          <div className="member-info">
            <h4>Josh Mullins</h4>
            <p>Kitchen Manager</p>
            <div className="line-decoration"></div>
          </div>
        </div>

        <div className="carousel-blur right-blur"></div>
      </div>
    </section>
  );
};

export default ExpertTeam;
