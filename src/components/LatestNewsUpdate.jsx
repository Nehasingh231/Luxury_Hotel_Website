import React from "react";
import "./LatestNewsUpdate.css";

const newsData = [
  {
    title: "Retore Lighting Design ...",
    date: "20 December 2023",
    category: "Interior",
  },
  {
    title: "Classy Rooms That Will ...",
    date: "22 December 2023",
    category: "Design",
  },
  {
    title: "Explore Interior Design ...",
    date: "20 December 2023",
    category: "Interior",
  },
  {
    title: "A Nice & Clean Rooms ...",
    date: "22 December 2023",
    category: "Design",
  },
  {
    title: "Luxury Bathroom Interior Styles For You",
    date: "22 December 2023",
    category: "Interior",
    isLarge: true, // Indicates the large card
  },
];

const LatestNewsUpdate = () => {
  const smallCards = newsData.filter((item) => !item.isLarge);
  const largeCard = newsData.find((item) => item.isLarge);

  return (
    <div className="latest-news-section">
      <div className="latest-news-header">
        <div className="latest-line-container">
          <div className="latest-vertical-line"></div>
        </div>
        <div className="latest-news-header">
  <div className="latest-headings">
    <h4>LOCAL NEWS & ACTIVITIES</h4>
    <h2>Latest News Update</h2>
  </div>
  
</div>

        <a href="#">Discover More</a>
      </div>

      <div className="latest-news-container">
        <div className="latest-small-cards">
          {smallCards.map((item, index) => (
            <div className="latest-news-card" key={index}>
              <div className="latest-thumbnail">
                <button className="latest-arrow-btn">›</button>
              </div>
              <p className="latest-title">{item.title}</p>
              <div className="latest-meta">
                <span>{item.date}</span>
                <span className="latest-divider">|</span>
                <span className="latest-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {largeCard && (
          <div className="latest-large-card">
            <div className="latest-thumbnail">
              <button className="latest-arrow-btn">›</button>
            </div>
            <p className="latest-title">{largeCard.title}</p>
            <div className="latest-meta">
              <span>{largeCard.date}</span>
              <span className="latest-divider">|</span>
              <span className="latest-category">{largeCard.category}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNewsUpdate;