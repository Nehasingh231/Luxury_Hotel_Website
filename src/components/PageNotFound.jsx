import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-inner">
        <h1 className="notfound-code">404</h1>
        <div className="notfound-text-content">
          <h2 className="notfound-heading">Oops!! Something Is Missing</h2>
          <p className="notfound-description">
            Sorry but the page you are looking for does not exist, has been removed, <br />
            name changed or is temporarily unavailable.
          </p>
          <Link to="/">
      <button className="notfound-button">
        Back To Home <FaArrowRight className="notfound-arrow" />
      </button>
    </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
