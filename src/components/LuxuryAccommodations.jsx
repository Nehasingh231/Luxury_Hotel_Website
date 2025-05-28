import React from 'react';
import './LuxuryAccommodations.css';
import { FaUser, FaBath, FaUtensils, FaBed, FaWifi, FaSnowflake, FaChevronRight } from 'react-icons/fa';

const roomData = [
  {
    title: 'Superior Suite',
    price: '$300/Night',
    features: ['1-2 Persons', 'Bathtub', 'Free Breakfast', 'King Size Bed', 'Free Wifi', 'Air Conditioner'],
  },
  {
    title: 'Junior Suite',
    price: '$270/Night',
    features: ['1-2 Persons', 'Bathtub', 'Free Breakfast', 'King Size Bed', 'Free Wifi', 'Air Conditioner'],
  },
  {
    title: 'Deluxe Room',
    price: '$210/Night',
    features: ['1-2 Persons', 'Bathtub', 'Free Breakfast', 'King Size Bed', 'Free Wifi', 'Air Conditioner'],
  },
];

const iconMap = {
  '1-2 Persons': <FaUser />,
  Bathtub: <FaBath />,
  'Free Breakfast': <FaUtensils />,
  'King Size Bed': <FaBed />,
  'Free Wifi': <FaWifi />,
  'Air Conditioner': <FaSnowflake />,
};

const LuxuryAccommodations = () => {
  return (
    <section className="luxacc-container">
      <div className="luxacc-header">
        <div className="luxacc-line"></div>
        <p className="luxacc-subtitle">OUR ROOM CHOICES</p>
        <h2 className="luxacc-title">Luxury Rooms & Suites</h2>
      </div>

      <div className="luxacc-rooms">
        {roomData.map((room, index) => (
          <div key={index} className={`luxacc-room-card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="luxacc-image-placeholder"></div>
            <div className="luxacc-room-info">
              <div className="luxacc-room-title">{room.title}</div>
              <div className="luxacc-room-price">{room.price}</div>
              <div className="luxacc-features">
                {room.features.map((feat, i) => (
                  <div key={i} className="luxacc-feature-item">
                    {iconMap[feat]}
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="luxacc-actions">
                <a href="#" className="luxacc-link">
                  Details <FaChevronRight />
                </a>
                <a href="#" className="luxacc-link book">
                  Book Now <FaChevronRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryAccommodations;
