import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../component/carousel2";
import Carousel1 from "../component/carousel1";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/flight.css";
import Vid from "../travelAssets/flight-2 (6).mp4";
import Navbar from "../component/navbar";
import axios from "axios";
import Footer1 from "../component/footer";

const FlightBooking = () => {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    departDate: "",
  });
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    const element = document.querySelector(".below");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.source || !formData.destination) {
      alert("Please fill in both source and destination.");
      return;
    }

    console.log("Form Data:", formData); // Debug form data

    try {
      const response = await axios.get("http://localhost:8000/api/flights", {
        params: {
          source: formData.source,
          destination: formData.destination,
          departDate: formData.departDate,
        },
      });
      console.log("API Response:", response.data); // Debug response data
      navigate("/details", { state: { results: response.data, type: "flight" } });
    } catch (error) {
      console.error("Error fetching flight details:", error.message);
      alert(error.response?.data?.message || "No flights found. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      {/* Jumbotron */}
      <div className="jumbotron" style={{ height: "600px" }}>
        <video autoPlay muted>
          <source src={Vid} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="container2 text-center" style={{ marginTop: "180px" }}>
          <h1 className="takeoff-text">
            <span style={{ color: "rgb(34, 2, 86)" }}>P</span>
            <span>l</span>
            <span>a</span>
            <span>n</span>
            <span> </span>
            <span style={{ color: "rgb(34, 2, 86)" }}>Y</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span> </span>
            <span style={{ color: "rgb(34, 2, 86)" }}>J</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>n</span>
            <span>e</span>
            <span>y</span>
            <span>.</span>
          </h1>
          <p style={{ color: "rgb(0, 0, 0)", fontSize: "15px", textAlign: "left" }}>
            Find flights and explore destinations!
          </p>
          {/* SEARCH CONTAINER */}
          <div className="search-container" style={{ marginTop: "10px" }}>
            <form onSubmit={handleSubmit}>
              <div className="search-fields">
                <div className="form-group">
                  <i className="bx bx-map"></i>
                  <label htmlFor="source" className="form-label">
                    From:
                  </label>
                  <input
                    className="form-control"
                    list="sourceCityOptions"
                    id="source"
                    placeholder="Source City"
                    value={formData.source}
                    onChange={handleInputChange}
                  />
                  <datalist id="sourceCityOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Delhi" />
                   
                  </datalist>
                </div>

                <div>
                  <i className="bx bx-plane"></i>
                </div>

                <div className="form-group">
                  <i className="bx bx-map-pin"></i>
                  <label htmlFor="destination" className="form-label">
                    To:
                  </label>
                  <input
                    className="form-control"
                    list="destinationCityOptions"
                    id="destination"
                    placeholder="Destination City"
                    value={formData.destination}
                    onChange={handleInputChange}
                  />
                  <datalist id="destinationCityOptions">
                    <option value="Singapore" />
                    <option value="New York" />
                    <option value="Seattle" />
                    
                  </datalist>
                </div>
              </div>

              <i className="bx bx-swap-horizontal"></i>
              <div className="form-group">
                <label htmlFor="departDate" className="form-label">
                  Depart:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="departDate"
                  value={formData.departDate}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="btn-search">
                <i className="bx bx-search"></i> Search
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* EXPLORE MORE SECTION */}
      <div className="container-fluid bg-3 text-center">
        <h3 style={{ color: "rgb(31, 41, 182)" }}>
          <div className="scroll-container">
            <div className="scroll-down" onClick={handleScroll}></div>
            <div className="explore-text">Explore More...!</div>
          </div>
        </h3>
      </div>
      <div className="below"></div>

      <div className={`head1 ${animate ? "animate" : ""}`}>
        Where Tradition Meets Splendor: Top Indian Destinations
      </div>
      <Carousel />
      <div className={`head1 ${animate ? "animate" : ""}`}>
        Continue Your Journey of Discovery
      </div>
      <Carousel1 />

      {/* FOOTER */}
      <Footer1 />
      
    </div>
  );
};

export default FlightBooking;
