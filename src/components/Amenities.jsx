import React from "react";
import "./Amenities.css";
// Import your icon images (adjust paths as needed)
import gymIcon from "../assets/gym.svg";
import spaIcon from "../assets/spa.svg";
import diningIcon from "../assets/breakfast.svg";

const Amenities = () => {
  return (
    <section className="amenities-section">
      <div className="amenities-header">
        <div className="vertical-line"></div>
        <p className="intro-text">INTRODUCING OUR SERVICES</p>
        <h2 className="amenities-title">Amenities That You Can Enjoy</h2>
        <p className="amenities-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="amenities-grid">
        <div className="amenity-block light" />

        <div className="amenity-block dark">
          <img src={gymIcon} alt="Gym" className="icon-image" />
          <h3 className="amenity-title">Workout & Yoga Rooms</h3>
          <p className="amenity-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="discover-button">Discover More →</button>
        </div>

        <div className="amenity-block dark">
          <img src={spaIcon} alt="Spa" className="icon-image" />
          <h3 className="amenity-title">Spa, Massage & Sauna</h3>
          <p className="amenity-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="discover-button">Discover More →</button>
        </div>

        <div className="amenity-block light" />

        <div className="amenity-block light" />

        <div className="amenity-block dark">
          <img src={diningIcon} alt="Dining" className="icon-image" />
          <h3 className="amenity-title">Multiple Cuisines & Beverages</h3>
          <p className="amenity-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="discover-button">Discover More →</button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;