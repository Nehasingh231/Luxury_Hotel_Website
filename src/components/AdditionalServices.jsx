import React from 'react';
import './additionalServices.css';

const services = [
  {
    title: 'Room Cleaning',
    price: '$33/Daily',
  },
  {
    title: 'Drinks Included',
    price: '$25/Daily',
  },
  {
    title: 'Room Breakfast',
    price: '$15/Daily',
  },
];

function AdditionalServices() {
  return (
    <section className="additional-services">
      <div className="additional-services-separator"></div>
      <div className="additional-services-header">
        <p className="additional-services-subtitle">BEST PRICES</p>
        <h2 className="additional-services-title">Extra Services</h2>
      </div>

      <div className="additional-services-list">
        {services.map((service, index) => (
          <div className="additional-services-item" key={index}>
            <div className="additional-services-placeholder">
              <div className="additional-services-content">
                <h3 className="additional-services-name">{service.title}</h3>
                <p className="additional-services-price">{service.price}</p>
                <div className="additional-services-divider"></div>
                <button className="additional-services-btn">Add to Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdditionalServices;