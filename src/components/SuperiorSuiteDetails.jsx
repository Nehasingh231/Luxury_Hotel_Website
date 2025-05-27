import React from "react";
import {
  FaUserFriends,
  FaBath,
  FaWifi,
  FaSmokingBan,
  FaSnowflake,
  FaUtensils,
  FaBed,
  FaCheckCircle,
} from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import "./SuperiorSuiteDetails.css";

const SuperiorSuiteDetails = () => {
  return (
    <div className="ssd-container">
      {/* Left Content */}
      <div className="ssd-info">
        <h1 className="ssd-title">Superior Suite</h1>
        <p className="ssd-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="ssd-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Timings */}
        <div className="ssd-timings">
          <div className="ssd-time">
            <BsCalendarDate className="ssd-time-icon" />
            <div>
              <span>Check In</span>
              <p>12:00 PM</p>
            </div>
          </div>
          <div className="ssd-time">
            <BsCalendarDate className="ssd-time-icon" />
            <div>
              <span>Check Out</span>
              <p>11:00 AM</p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="ssd-section">
          <h4>Room Amenities</h4>
          <div className="ssd-amenities">
            <span><FaUserFriends /> 1-2 Persons</span>
            <span><FaBath /> Bathtub</span>
            <span><FaUtensils /> Free Breakfast</span>
            <span><FaSmokingBan /> No Smoking</span>
            <span><FaBed /> King Size Bed</span>
            <span><FaWifi /> Free Wifi</span>
            <span><FaSnowflake /> Air Conditioner</span>
            <span><FaBed /> Extra Bed ($15)</span>
          </div>
        </div>

        {/* Offers */}
        <div className="ssd-section">
          <h4>Available Offers</h4>
          <ul className="ssd-list">
            <li>Welcome Snacks</li>
            <li>Free High Speed Wifi</li>
            <li>10% Discount For Tour Service</li>
            <li>Daily Complimentary Drink</li>
            <li>Free Late Check Out & Early Check In</li>
            <li>Breakfast Between The Trip</li>
          </ul>
        </div>

        {/* Room Rules */}
        <div className="ssd-section">
          <h4>Room Rules</h4>
          <ul className="ssd-list">
            <li>No Pet Allowed</li>
            <li>Child Under 3 Years Old Free Charge And Share Bed With Parents</li>
            <li>If The Guest Exceeds The Capacity, Additional Bed Are Required</li>
            <li>Smoking In The Room Will Be Penalized</li>
          </ul>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="ssd-reserve">
        <h4>Reserve : <span>$300/Night</span></h4>
        <label>Check In</label>
        <input type="text" value="24 December 2023" readOnly />

        <label>Check Out</label>
        <input type="text" value="28 December 2023" readOnly />

        <div className="ssd-select-row">
          <div>
            <label>Room</label>
            <select><option>1</option></select>
          </div>
          <div>
            <label>Guest</label>
            <select><option>1</option></select>
          </div>
        </div>

        <button className="ssd-check-btn">
          Check Availability →
        </button>

        <div className="ssd-extra">
          <h4>Extra Service : <span>$35/Daily</span></h4>
          <label><input type="checkbox" defaultChecked /> Room Cleaning</label>
          <label><input type="checkbox" /> Drinks Included</label>
          <label><input type="checkbox" /> Room Breakfast</label>
        </div>

        <div className="ssd-total">
          <p>Total Cost :</p>
          <h2>$335</h2>
        </div>

        <button className="ssd-book-btn">Book Now →</button>
      </div>
    </div>
  );
};

export default SuperiorSuiteDetails;
