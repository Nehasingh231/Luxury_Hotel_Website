import React from 'react';
import './Roomamenities.css';

// You can use real icons in place of these emoji/icons
const amenities = [
  { icon: '📶', title: 'High Speed Wifi', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '🛎️', title: '24 Hours Receptionist', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '🧺', title: 'Self Laundry', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '🚗', title: 'Upgrade Room', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '🔐', title: 'Security & Safety', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '☕', title: 'Welcome Drink', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '🚒', title: 'Firefighters', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: '🧴', title: 'Beauty Kits', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

function RoomAmenities() {
  return (
    <section className="room-amenities">
      <div className="room-amenities-header">
        <div className="left">
         <div className="gold-line"></div>
          <p className="room-amenity-subtitle">THE ESSENTIAL IN-ROOM AMENITIES</p>
          <h2 className="room-amenity-header-title">We Have What You Need</h2>
        </div>
        <div className="right">
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>

      <div className="room-amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>
            <div className="room-amenity-icon">{item.icon}</div>
            <h4 className="room-amenity-title">{item.title}</h4>
            <p className="room-amenity-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoomAmenities;