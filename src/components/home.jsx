import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./home.css";

const AdventureAtlas = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".container__left h1", scrollRevealOption);
    ScrollReveal().reveal(".container__left .container__btn", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".container__right h4", {
      ...scrollRevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal(".container__right h2", {
      ...scrollRevealOption,
      delay: 2500,
    });
    ScrollReveal().reveal(".container__right h3", {
      ...scrollRevealOption,
      delay: 3000,
    });
    ScrollReveal().reveal(".container__right p", {
      ...scrollRevealOption,
      delay: 3500,
    });

    ScrollReveal().reveal(".location", {
      ...scrollRevealOption,
      origin: "left",
      delay: 5000,
    });

    ScrollReveal().reveal(".socials span", {
      ...scrollRevealOption,
      origin: "top",
      delay: 5500,
      interval: 500,
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">ADVENTURE ATLAS</a>
          </div>
          <div
            className="nav__menu__btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul className={`nav__links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">TRAIN</a></li>
          <li><a href="#">FLIGHT</a></li>
          <li><a href="#">BUS</a></li>
          <li><a href="#">HOTELS</a></li>
          <li><a href="#">ITINERARY BUILDER</a></li>
          <a href="#about" className="nav-link login-signup">LOGIN/SIGN UP</a>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="container__left">
          <h1>Enjoy Your Holidays</h1>
        </div>
        <div className="container__right">
          <div className="images">
            <img src="travel.jpg" alt="travel" className="travel" />
            <img src="travel2.jpg" alt="travel2" className="travel2" />
          </div>
          <div className="content">
            <h4>Escape the Ordinary</h4>
            <h2>TRAVEL PLANNER</h2>
            <h3>Adventure is Out There – Find It.</h3>
            <p>
              Plan your dream getaway with ease! Discover destinations, create
              custom itineraries, and unlock travel tips—all in one place. Start
              your adventure today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureAtlas;
