
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import bathtubIcon from '../assets/bathtub.svg';
import bedIcon from '../assets/bed.svg';
import airconIcon from '../assets/air_conditioner.svg';
import wifiIcon from '../assets/wifi.svg';
import './RoomSection.css'

function RoomSection() {
  return (
    <section className="rooms-section">
          <div className="rooms-header">
            <p className="rooms-subtitle">OUR ROOM CHOICES</p>
            <h2>Luxury Rooms & Suites</h2>
          </div>
          <div className="rooms-grid">
            <div className="room-card large-card">
              <div className="room-overlay">
                <h3>Superior Suite</h3>
                <p>$300/Night</p>
                <div className="divider-line"></div>
                <div className="book-and-icons">
                  <a href="#" className="book-now">
                    Book Now <FaChevronRight />
                  </a>
                  <div className="room-icons">
      <img src={bathtubIcon} alt="Bathtub" />
      <img src={bedIcon} alt="Double Bed" />
      <img src={airconIcon} alt="Air Conditioner" />
      <img src={wifiIcon} alt="Free WiFi" />
    </div>
                </div>
              </div>
            </div>
            <div className="room-card large-card">
              <div className="room-overlay">
                <h3>Junior Suite</h3>
                <p>$270/Night</p>
                <div className="divider-line"></div>
              </div>
            </div>
            <div className="room-card small-card">
              <div className="room-overlay">
                <h3>Deluxe Room</h3>
                <p>$210/Night</p>
                <div className="divider-line"></div>
              </div>
            </div>
            <div className="room-card small-card">
              <div className="room-overlay">
                <h3>Double Room</h3>
                <p>$180/Night</p>
                <div className="divider-line"></div>
              </div>
            </div>
            <div className="room-card small-card">
              <div className="room-overlay">
                <h3>Family Room</h3>
                <p>$150/Night</p>
                <div className="divider-line"></div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default RoomSection