import React, { useState, useRef } from 'react';
import './HeroSection02.css';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const LuxuryHeroSection = () => {
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  // Refs to trigger open
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const handleCheckAvailability = () => {
    alert(
      `Checking availability for:\n- Check In: ${checkInDate.toDateString()}\n- Check Out: ${checkOutDate.toDateString()}\n- Rooms: ${roomCount}\n- Guests: ${guestCount}`
    );
  };

  return (
    <section className="luxhero-section">
      <div className="luxhero-overlay">
        <div className="luxhero-left">
          <p className="luxhero-tagline">Best Place To Relax & Enjoy</p>
          <h1 className="luxhero-heading">
            Perfect Place to Enjoy <br /> Your Life
          </h1>
          <div className="luxhero-rating-block">
            <div className="luxhero-circles">
              <span className="luxhero-circle" />
              <span className="luxhero-circle" />
              <span className="luxhero-circle" />
            </div>
            <div>
              <p className="luxhero-rating-text">4.8 Rated Around The World</p>
              <div className="luxhero-stars">★★★★★</div>
            </div>
          </div>
          <div className="luxhero-slider-controls">
            <button className="luxhero-slider-btn">◀</button>
            <button className="luxhero-slider-btn">▶</button>
          </div>
        </div>

        <div className="luxhero-booking-panel">
          <div className="luxhero-field-group">
            <label className="luxhero-label">Check In</label>
            <div className="luxhero-field-input datepicker-wrapper">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                className="luxhero-datepicker"
                ref={checkInRef}
              />
              <FaCalendarAlt onClick={() => checkInRef.current.setFocus()} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div className="luxhero-field-group">
            <label className="luxhero-label">Check Out</label>
            <div className="luxhero-field-input datepicker-wrapper">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                className="luxhero-datepicker"
                ref={checkOutRef}
              />
              <FaCalendarAlt onClick={() => checkOutRef.current.setFocus()} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div className="luxhero-double-row">
            <div className="luxhero-field-group">
              <label className="luxhero-label">Room</label>
              <div className="luxhero-field-input">
                <select
                  value={roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="luxhero-field-group">
              <label className="luxhero-label">Guest</label>
              <div className="luxhero-field-input">
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button className="luxhero-check-btn" onClick={handleCheckAvailability}>
            Check Availability →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHeroSection;
