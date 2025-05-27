import React, { useState, useRef } from "react";
import "./Bookingform.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LuxuryBookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create refs for the date pickers
  const checkInDatePickerRef = useRef(null);
  const checkOutDatePickerRef = useRef(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    if (checkOutDate <= date) {
      const newCheckOut = new Date(date);
      newCheckOut.setDate(date.getDate() + 1);
      setCheckOutDate(newCheckOut);
    }
  };

  const handleCheckOutChange = (date) => {
    if (date > checkInDate) {
      setCheckOutDate(date);
    }
  };

  // Function to open check-in datepicker
  const openCheckInDatePicker = () => {
    checkInDatePickerRef.current.setOpen(true);
  };

  // Function to open check-out datepicker
  const openCheckOutDatePicker = () => {
    checkOutDatePickerRef.current.setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert(`Booking request received:
      Check-In: ${checkInDate.toLocaleDateString()}
      Check-Out: ${checkOutDate.toLocaleDateString()}
      Rooms: ${roomCount}
      Guests: ${guestCount}`);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="luxury-booking-container">
      <div className="luxury-booking-text">
        <h1>Get Your Luxury<br />Experience Now</h1>
      </div>

      <form className="luxury-booking-form" onSubmit={handleSubmit}>
        <label>Check In</label>
        <div className="luxury-input-group">
          <DatePicker
            ref={checkInDatePickerRef}
            selected={checkInDate}
            onChange={handleCheckInChange}
            minDate={new Date()}
            customInput={<input type="text" readOnly />}
            dateFormat="dd MMMM yyyy"
          />
          <span 
            className="luxury-calendar-icon" 
            onClick={openCheckInDatePicker}
          >
            📅
          </span>
        </div>

        <label>Check Out</label>
        <div className="luxury-input-group">
          <DatePicker
            ref={checkOutDatePickerRef}
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            minDate={checkInDate}
            customInput={<input type="text" readOnly />}
            dateFormat="dd MMMM yyyy"
          />
          <span 
            className="luxury-calendar-icon" 
            onClick={openCheckOutDatePicker}
          >
            📅
          </span>
        </div>

        <div className="luxury-dropdown-row">
          <div>
            <label>Room</label>
            <select
              value={roomCount}
              onChange={(e) => setRoomCount(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Guest</label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="luxury-availability-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Checking..." : "Check Availability →"}
        </button>
      </form>
    </div>
  );
};

export default LuxuryBookingForm;