import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { FaCalendarAlt, FaChevronDown, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RoomSection from "../components/RoomSection";
import Amenities from "../components/Amenities";
import Testimonial from "../components/Testiminoal";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

  

const HomePage = () => {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);


  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  });
  const [rooms, setRooms] = useState(1);
  const [errors, setErrors] = useState({});

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    if (checkOutDate < date) {
      const newCheckOut = new Date(date);
      newCheckOut.setDate(date.getDate() + 1);
      setCheckOutDate(newCheckOut);
    }
    setErrors({ ...errors, checkIn: null });
  };

  const handleCheckOutChange = (date) => {
    if (date <= checkInDate) {
      setErrors({ ...errors, checkOut: "Check-out must be after check-in" });
      return;
    }
    setCheckOutDate(date);
    setErrors({ ...errors, checkOut: null });
  };

  const handleRoomChange = (e) => {
    setRooms(parseInt(e.target.value));
  };

  const handleCheckAvailability = () => {
    const newErrors = {};

    if (!checkInDate) {
      newErrors.checkIn = "Check-in date is required";
    }

    if (!checkOutDate) {
      newErrors.checkOut = "Check-out date is required";
    } else if (checkOutDate <= checkInDate) {
      newErrors.checkOut = "Check-out must be after check-in";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Checking availability with:", {
      checkInDate,
      checkOutDate,
      rooms,
    });

    alert(
      `Checking availability for ${rooms} room(s) from ${checkInDate.toLocaleDateString()} to ${checkOutDate.toLocaleDateString()}`
    );
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" data-aos="zoom-in" >
        <div className="hero-overlay">
          <div className="hero-text">
            <div className="hero-subtitle">
              <span className="vertical-line"></span>
              <p>Best Place To Relax & Enjoy</p>
            </div>
            <h1>A Luxurious Way To<br />Enjoy Your Life</h1>
            <Link to="/pages/room" className="hero-discover-btn">
      <span>Discover Rooms</span>
      <FaChevronRight className="hero-chevron-icon"/>
    </Link>
          </div>

          <div className="arrow left-arrow">
            <FaChevronLeft />
          </div>
          <div className="arrow right-arrow">
            <FaChevronRight />
          </div>

          <div className="booking-bar">
            <div className="booking-item">
              <label>Check In</label>
              <div className={`input-box ${errors.checkIn ? "error" : ""}`}>
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckInChange}
                  minDate={new Date()}
                  customInput={
                    <div className="date-picker-custom-input">
                      <span>{formatDate(checkInDate)}</span>
                      <FaCalendarAlt />
                    </div>
                  }
                />
                {errors.checkIn && (
                  <span className="error-message">{errors.checkIn}</span>
                )}
              </div>
            </div>

            <div className="booking-item">
              <label>Check Out</label>
              <div className={`input-box ${errors.checkOut ? "error" : ""}`}>
                <DatePicker
                  selected={checkOutDate}
                  onChange={handleCheckOutChange}
                  minDate={
                    checkInDate
                      ? new Date(checkInDate.getTime() + 86400000)
                      : new Date()
                  }
                  customInput={
                    <div className="date-picker-custom-input">
                      <span>{formatDate(checkOutDate)}</span>
                      <FaCalendarAlt />
                    </div>
                  }
                />
                {errors.checkOut && (
                  <span className="error-message">{errors.checkOut}</span>
                )}
              </div>
            </div>

            <div className="booking-item">
              <label>Room</label>
              <div className="input-box">
                <div className="room-select-container">
                  <select
                    className="room-select"
                    value={rooms}
                    onChange={handleRoomChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <FaChevronDown className="select-arrow" />
                </div>
              </div>
            </div>

            <button className="check-btn" onClick={handleCheckAvailability}>
              <span>Check Availability</span>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

  <div data-aos="fade-up"><RoomSection /></div>
<div data-aos="fade-right"><Amenities /></div>
<div data-aos="zoom-in"><Testimonial /></div>
<div data-aos="fade-left"><TeamSection /></div>

  <Footer />
    </>
  );
};

export default HomePage;