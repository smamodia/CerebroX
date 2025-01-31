import React, { useContext, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function Navbar() {
  const { user } = useContext(UserContext); // Access global user state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#" className="logo">
        ADVENTURE ATLAS
      </a>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Links */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/home">HOME</Link>
        <Link to="/">BUS</Link>
        <Link to="/flights">FLIGHT</Link>
        <Link to="/trains">TRAIN</Link>
        <Link to="/hotel">HOTEL</Link>
        <Link to="/itenary">ITINERARY BUILDER</Link>
        {user ? (
          <Link className="user-info_" to="/user-profile">
          <img
            src="https://cdn-icons-png.freepik.com/256/1160/1160622.png?semt=ais_hybrid" // Add the path to the profile image
            alt="profile"
            className="profile-pic"
          />
          <span>Hi, {user.firstname}!</span>
        </Link>
        
        ) : (
          <Link className="nav-link login-signup" to="/login">
            LOGIN/SIGN UP
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;




/*import React, { useState } from "react";
import "../styles/navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        ADVENTURE ATLAS
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/home">HOME</Link>
        <Link to="/">BUS</Link>
        <Link to="/flights">FLIGHT</Link>
        <Link to="/trains">TRAIN</Link>
        <Link to="/hotel">HOTEL</Link>
        <Link to="/itenary">ITINERARY BUILDER</Link>
        <Link className="nav-link login-signup " to="/login">
          LOGIN/SIGN UP
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
*/