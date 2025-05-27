import React from 'react';
import './luxuryAccommodations.css';

const accommodations = [
  {
    title: 'Superior Suite',
    price: '$300/Night',
    category: 'Exclusive',
    features: [
      { name: '1-2 Persons', icon: '👤' },
      { name: 'King Size Bed', icon: '🛏️' },
      { name: 'Bathtub', icon: '🛁' },
      { name: 'Free WiFi', icon: '📶' },
      { name: 'Free Breakfast', icon: '🍳' },
      { name: 'Air Conditioner', icon: '❄️' },
    ],
  },
  {
    title: 'Junior Suite',
    price: '$270/Night',
    category: 'Exclusive',
    features: [
      { name: '1-2 Persons', icon: '👤' },
      { name: 'King Size Bed', icon: '🛏️' },
      { name: 'Bathtub', icon: '🛁' },
      { name: 'Free WiFi', icon: '📶' },
      { name: 'Free Breakfast', icon: '🍳' },
      { name: 'Air Conditioner', icon: '❄️' },
    ],
  },
  {
    title: 'Deluxe Room',
    price: '$210/Night',
    category: 'Exclusive',
    features: [
      { name: '1-2 Persons', icon: '👤' },
      { name: 'King Size Bed', icon: '🛏️' },
      { name: 'Bathtub', icon: '🛁' },
      { name: 'Free WiFi', icon: '📶' },
      { name: 'Free Breakfast', icon: '🍳' },
      { name: 'Air Conditioner', icon: '❄️' },
    ],
  },
];

function LuxuryAccommodations() {
  return (
    <section className="luxury-accommodations">
      <div className="accommodations-header">
             <div className="line-container">  
  <div className="vertical-line"></div>
</div>
        <p className="accommodations-subtitle">OUR ACCOMMODATION OPTIONS</p>
        <h2 className="accommodations-title">Luxury Rooms & Suites</h2>
      </div>

      <div className="accommodations-list">
        {accommodations.map((room, index) => (
          <div className={`accommodation-item ${index % 2 === 1 ? 'accommodation-reverse' : ''}`} key={index}>
            <div className="accommodation-image-placeholder" />
            <div className="accommodation-card">
              <h3 className="accommodation-name">{room.title}</h3>
              <p className="accommodation-price">{room.price}</p>
              <p className="accommodation-category">{room.category}</p>
              <div className="accommodation-features">
                {room.features.map((feat, i) => (
                  <span key={i} className="accommodation-feature">
                    <span className="feature-icon">{feat.icon}</span>
                    {feat.name}
                  </span>
                ))}
              </div>
              <div className="accommodation-actions">
                <button className="accommodation-details-btn">Details</button>
                <button className="accommodation-book-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="accommodations-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}

export default LuxuryAccommodations;