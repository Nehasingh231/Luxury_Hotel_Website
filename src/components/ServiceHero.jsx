import React from 'react';
import './ServiceHero.css';

function ServiceHero() {
  return (
    <section className="service-hero">
      <div className="service-hero-content">
        <div className="service-hero-line-container">
          <div className="latest-line-container">
            <div className="latest-vertical-line new"></div>
          </div>
        </div>
        <p className='service-hero-desc'>Our Services</p>
        <h1 className="service-hero-title">Introducing Our<br />Best Services</h1>
      </div>
    </section>
  );
}

export default ServiceHero;