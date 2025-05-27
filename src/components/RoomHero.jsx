import React from 'react';
import './roomhero.css';

function RoomHero() {
  return (
    <section className="room-hero">
      <div className="room-hero-content">
        <div className="line-container">
       <div className="latest-line-container">
          <div className="latest-vertical-line new"></div>
        </div>
      </div>
        <h1 className="room-hero-title">Discover The Best<br />Room For You</h1>
      </div>
    </section>
  );
}

export default RoomHero;
