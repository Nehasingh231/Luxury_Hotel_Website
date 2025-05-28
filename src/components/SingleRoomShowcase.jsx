import React from 'react';
import './SingleRoomShowcase.css';
import { FaArrowRight } from 'react-icons/fa';

const SingleRoomShowcase = () => {
  const rooms = [
    {
      title: 'Deluxe Room',
      price: '$210/Night',
      showDetails: true,
    },
    {
      title: 'Double Room',
      price: '$180/Night',
      showDetails: false,
    },
    {
      title: 'Family Room',
      price: '$150/Night',
      showDetails: false,
    },
  ];

  return (
    <div className="singleRoomShowcase-container">
      <div className="singleRoomShowcase-heading">
        <div className="singleRoomShowcase-line"></div>
        <h2>Other Rooms</h2>
      </div>

      <div className="singleRoomShowcase-rooms">
        {rooms.map((room, index) => (
          <div key={index} className="singleRoomShowcase-card">
            <div className="singleRoomShowcase-overlay">
              <h3>{room.title}</h3>
              <p className="singleRoomShowcase-price">{room.price}</p>
              {room.showDetails ? (
                <div className="singleRoomShowcase-details">
                  <span>See Details</span>
                  <FaArrowRight className="singleRoomShowcase-arrow" />
                </div>
              ) : (
                <div className="singleRoomShowcase-lineBottom"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleRoomShowcase;
