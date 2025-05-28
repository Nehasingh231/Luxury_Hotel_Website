import React from 'react';
import './SingleBlogContent.css';

const SingleBlogContent = () => {
  return (
    <div className="singleblogcontent-wrapper">
      <div className="singleblogcontent-container">

        {/* Left Content Area */}
        <div className="singleblogcontent-main">
          <div className="blogcontent-image placeholder"></div>

          <p className="blogcontent-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>

          <p className="blogcontent-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>

          <div className="blogcontent-gallery">
            <div className="blogcontent-gallery-img placeholder"></div>
            <div className="blogcontent-gallery-img placeholder"></div>
          </div>

          <p className="blogcontent-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </p>

          <ul className="blogcontent-list">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>

          <p className="blogcontent-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>

          <div className="blogcontent-tags">
            <span>Interior</span>
            <span>Tips&Trick</span>
            <span>Insight</span>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="singleblogcontent-sidebar">
          <div className="sidebar-section search">
            <h3>Search Post</h3>
            <div className="sidebar-searchbar">
              <input type="text" placeholder="Search Here" />
              <button>🔍</button>
            </div>
          </div>

          <div className="sidebar-section latest">
            <h3>Latest Post</h3>
            <div className="latest-post-item">
              <div className="latest-thumb placeholder"></div>
              <div className="latest-info">
                <p>Retore Lighting Design In The ...</p>
                <span>20 Dec • Interior</span>
              </div>
            </div>
            <div className="latest-post-item">
              <div className="latest-thumb placeholder"></div>
              <div className="latest-info">
                <p>Classy Room That Will Blow Your ...</p>
                <span>20 Dec • Design</span>
              </div>
            </div>
            <div className="latest-post-item">
              <div className="latest-thumb placeholder"></div>
              <div className="latest-info">
                <p>Explore Interior Design Of Hotel ...</p>
                <span>20 Dec • Interior</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section categories">
            <h3>Categories</h3>
            <ul>
              <li><span className="dot"></span>Interior</li>
              <li><span className="dot"></span>Design</li>
              <li><span className="dot"></span>Health</li>
              <li><span className="dot"></span>Travel</li>
              <li><span className="dot"></span>Holiday</li>
            </ul>
          </div>

          <div className="sidebar-section tags">
            <h3>Tags</h3>
            <div className="tag-list">
              <span>Interior</span>
              <span>Decor</span>
              <span>News</span>
              <span>Tips&Trick</span>
              <span>Insight</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleBlogContent;
