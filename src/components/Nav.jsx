import { Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

import React from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
      <div className="mobile-nav" onClick={toggleNav}>
        {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <ul style={{listStyleType: "none"}}>
          <li style={{display: "inline", padding: "5px"}}>
              <Link to="/" className="nav-item">Home</Link>
          </li>
          <li style={{display: "inline", padding: "5px"}}>
              <Link to="/about" className="nav-item">About</Link>
          </li>
          <li style={{display: "inline", padding: "5px"}}>
              <a href="#" className="nav-item">Menu</a>
          </li>
          <li style={{display: "inline", padding: "5px"}}>
              <Link to="/booking" className="nav-item">Reservations</Link>
          </li>
          <li style={{display: "inline", padding: "5px"}}>
              <a href="#" className="nav-item">Order Online</a>
          </li>
          <li style={{display: "inline", padding: "5px"}}>
              <a href="#" className="nav-item">Login</a>
          </li>
        </ul>
      </nav>
      </>
    )
}

export default Nav