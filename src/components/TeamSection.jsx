import React from 'react';
import './TeamSection.css';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Laurent Wayne',
      role: 'Hotel Manager',
      image: '', 
      socials: {
        twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe"
      },
    },
    {
      name: 'Josh Mullins',
      role: 'Kitchen Manager',
    },
    {
      name: 'Andrea Hugh',
      role: 'Receptionista',
    },
    {
      name: 'James Norman',
      role: 'Room Service',
    },
  ];

  return (
    <section className="team-section">
      <div className="team-header">
       <div className="line-container">  {/* Add this container */}
  <div className="vertical-line"></div>
</div>
        <p className="team-subtitle">MEET OUR TEAM</p>
        <h2 className="team-title">Expert Team Persons</h2>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="image-wrapper">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="placeholder" />
              )}

              {member.socials && (
               <ul className="social-icons">
  <li>
    <a href={member.socials.twitter} aria-label="Twitter">
      <FaTwitter />
    </a>
  </li>
  <li>
    <a href={member.socials.facebook} aria-label="Facebook">
      <FaFacebookF />
    </a>
  </li>
  <li>
    <a href={member.socials.instagram} aria-label="Instagram">
      <FaInstagram />
    </a>
  </li>
</ul>
              )}
            </div>

            <div className="card-text">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
