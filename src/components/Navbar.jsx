import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from '../assets/logo.svg'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('HOME');
  const [showDropdown, setShowDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);

 const menuItems = [
  {
    name: 'HOME',
    path: '/',
    dropdown: [
      { name: 'Home 1', path: '/' },
      { name: 'Home 2', path: '/home2' }
    ]
  },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICE', path: '/service' },
  {
    name: 'PAGES',
    path: '/pages',
    dropdown: [
      { name: 'Room', path: '/pages/room' },
      { name: 'Single Room', path: '/pages/single-room' },
      { name: 'Blog', path: '/pages/blog' },
      { name: 'Single Blog', path: '/pages/single-blog' },
      { name: '404 Page', path: '/pages/404' }
    ]
  },
  { name: 'CONTACT US', path: '/contact' }
];


  const handleItemClick = (itemName) => {
    setActive(itemName);
    if (menuItems.find(item => item.name === itemName)?.dropdown) {
      setClickedDropdown(clickedDropdown === itemName ? null : itemName);
    }
  };

  const handleDropdownItemClick = (subItem) => {
    // Handle sub-item click (e.g., navigation)
    console.log(`Navigating to: ${subItem}`);
    setShowDropdown(null);
    setClickedDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Imperial Logo" className="logo-image" />
        <div className="logo-text">
          <span className="imperial">IMPERIAL</span>
          <span className="grand">GRAND HOTEL</span>
        </div>
      </div>
<ul className="navbar-menu">
  {menuItems.map(item => (
    <li
      key={item.name}
      className={`nav-item ${active === item.name ? 'active' : ''}`}
      onMouseEnter={() => item.dropdown && setShowDropdown(item.name)}
      onMouseLeave={() => item.dropdown && !clickedDropdown && setShowDropdown(null)}
    >
      <Link
        to={item.path}
        onClick={() => handleItemClick(item.name)}
        className="nav-link"
      >
        {item.name}
        {item.dropdown && (
          showDropdown === item.name || clickedDropdown === item.name ?
            <FaChevronUp className="dropdown-icon" /> :
            <FaChevronDown className="dropdown-icon" />
        )}
      </Link>

      {(item.dropdown && (showDropdown === item.name || clickedDropdown === item.name)) && (
        <ul
          className="dropdown"
          onMouseEnter={() => setShowDropdown(item.name)}
          onMouseLeave={() => !clickedDropdown && setShowDropdown(null)}
        >
          {item.dropdown.map(sub => (
            <li key={sub.name} onClick={() => handleItemClick(item.name)}>
              <Link
                to={sub.path}
                 className="nav-link"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdownItemClick(sub.name);
                }}
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

    </nav>
  );
}