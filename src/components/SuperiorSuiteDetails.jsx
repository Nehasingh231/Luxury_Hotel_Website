import React, { useState, useEffect } from "react";
import {
  FaUserFriends,
  FaBath,
  FaSmokingBan,
  FaWifi,
  FaSnowflake,
  FaUtensils,
  FaBed,
  FaPlusSquare,
  FaCalendarAlt
} from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SuperiorSuiteDetails.css";

const SuperiorSuiteDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [extras, setExtras] = useState({
    cleaning: true,
    drinks: false,
    breakfast: false
  });
  const [totalCost, setTotalCost] = useState(335);
  const [nights, setNights] = useState(1);

  const basePrice = 300;
  const extraServicePrice = 35;

  useEffect(() => {
    // Calculate number of nights
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNights(diffDays);

    // Calculate total cost
    let extrasCost = 0;
    if (extras.cleaning) extrasCost += extraServicePrice;
    if (extras.drinks) extrasCost += extraServicePrice;
    if (extras.breakfast) extrasCost += extraServicePrice;

    const newTotal = (basePrice * roomCount * diffDays) + (extrasCost * diffDays);
    setTotalCost(newTotal);
  }, [startDate, endDate, roomCount, extras]);

  const handleExtraChange = (e) => {
    const { name, checked } = e.target;
    setExtras(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCheckAvailability = () => {
    alert(`Checking availability for ${roomCount} room(s) from ${formatDate(startDate)} to ${formatDate(endDate)}`);
  };

  const handleBookNow = () => {
    const bookingDetails = {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      roomCount,
      guestCount,
      extras,
      totalCost
    };
    alert(`Booking confirmed!\nTotal: $${totalCost}\nDetails: ${JSON.stringify(bookingDetails, null, 2)}`);
  };

  // Custom input component with calendar icon
  const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="ssd-date-input-container" onClick={onClick} ref={ref}>
      <input
        type="text"
        className="ssd-date-input"
        value={value}
        readOnly
      />
      <FaCalendarAlt className="ssd-date-icon" />
    </div>
  ));

  return (
    <div className="ssd-wrapper">
      {/* Left side content */}
      <div className="ssd-left">
        <h2 className="ssd-title">Superior Suite</h2>
        <p className="ssd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="ssd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="ssd-checkin-out">
          <div className="ssd-check-block">
            <LuCalendarClock className="ssd-clock-icon" />
            <div>
              <p className="ssd-check-label">Check In</p>
              <p className="ssd-check-time">12:00 PM</p>
            </div>
          </div>
          <div className="ssd-check-block">
            <LuCalendarClock className="ssd-clock-icon" />
            <div>
              <p className="ssd-check-label">Check Out</p>
              <p className="ssd-check-time">11:00 AM</p>
            </div>
          </div>
        </div>

        <div className="ssd-section">
          <h4 className="ssd-section-title">Room Amenities</h4>
          <ul className="ssd-icon-list">
            <li><FaUserFriends /> 1-2 Persons</li>
            <li><FaBath /> Bathtub</li>
            <li><PiCoffeeFill /> Free Breakfast</li>
            <li><FaSmokingBan /> No Smoking</li>
            <li><FaBed /> King Size Bed</li>
            <li><FaWifi /> Free Wifi</li>
            <li><FaSnowflake /> Air Conditioner</li>
            <li><FaPlusSquare /> Extra Bed ($15)</li>
          </ul>
        </div>

        <div className="ssd-section">
          <h4 className="ssd-section-title">Available Offers</h4>
          <ul className="ssd-bullet-list">
            <li>Welcome Snacks</li>
            <li>Free High Speed Wifi</li>
            <li>10 % Discount For Tour Service</li>
            <li>Daily Complementary Drink</li>
            <li>Free Late Check Out & Early Check In</li>
            <li>Breakfast Between The Trip</li>
          </ul>
        </div>

        <div className="ssd-section">
          <h4 className="ssd-section-title">Room Rules</h4>
          <ul className="ssd-bullet-list">
            <li>No Pet Allowed</li>
            <li>Child Under 3 Years Old Free Charge And Share Bed With Parents</li>
            <li>If The Guest Exceeds The Capacity, Additional Bed Are Required</li>
            <li>Smoking In The Room Will Be Penalized</li>
          </ul>
        </div>
      </div>

      {/* Right side (Reservation) */}
      <div className="ssd-sidebar">
        <div className="ssd-reserve-box">
          <p className="ssd-price-label">${basePrice}/Night</p>

          <div className="ssd-input-group">
            <label>Check In</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              customInput={<CustomDateInput />}
              wrapperClassName="ssd-date-picker"
            />
          </div>

          <div className="ssd-input-group">
            <label>Check Out</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate}
              customInput={<CustomDateInput />}
              wrapperClassName="ssd-date-picker"
            />
          </div>

          <div className="ssd-input-row">
            <div className="ssd-input-group">
              <label>Room</label>
              <select 
                value={roomCount} 
                onChange={(e) => setRoomCount(parseInt(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="ssd-input-group">
              <label>Guest</label>
              <select 
                value={guestCount} 
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <button 
            className="ssd-check-btn"
            onClick={handleCheckAvailability}
          >
            Check Availability →
          </button>

          <div className="ssd-extra">
            <h4>Extra Service : <span>${extraServicePrice}/Daily</span></h4>

            <label>
              <input 
                type="checkbox" 
                name="cleaning"
                checked={extras.cleaning}
                onChange={handleExtraChange}
              />
              <span>Room Cleaning</span>
            </label>
            <label>
              <input 
                type="checkbox" 
                name="drinks"
                checked={extras.drinks}
                onChange={handleExtraChange}
              />
              <span>Drinks Included</span>
            </label>
            <label>
              <input 
                type="checkbox" 
                name="breakfast"
                checked={extras.breakfast}
                onChange={handleExtraChange}
              />
              <span>Room Breakfast</span>
            </label>
          </div>

          <div className="ssd-total">
            <p>Total Cost ({nights} night{nights !== 1 ? 's' : ''}):</p>
            <h2>${totalCost}</h2>
          </div>

          <button 
            className="ssd-book-btn"
            onClick={handleBookNow}
          >
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperiorSuiteDetails;