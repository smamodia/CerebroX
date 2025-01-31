import Carousel from "../component/carousel2"
import Carousel1 from "../component/carousel1"
import React, { useState,useEffect } from "react";
import "../styles/bus.css";
import Vid from "../travelAssets/Bus (1).mp4";
import Navbar from "../component/navbar";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Footer1 from "../component/footer";

const Bus = () => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    source:"",
    destination:"",
    departDate:"",
  })
  const navigate = useNavigate();
  
    useEffect(() => {
        const timeout = setTimeout(() => {
        setAnimate(true);
      }, 100); 
      return () => clearTimeout(timeout);
    }, []);

  setTimeout(() => {
    setVisible(true);
  }, 6000);

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
      const response = await axios.get("http://localhost:8000/api/bus", {
        params: {
          source: formData.source,
          destination: formData.destination,
        },
      });
      console.log("API Response:", response.data); // Debug response data
      navigate("/details", { state: { results: response.data, type: "bus" } });
    } catch (error) {
      console.error("Error fetching bus details:", error.message);
      alert(error.response?.data?.message || "No buses found. Please try again.");
    }
  };
  

  return (
    <div>
      
      <Navbar/>
      {/*Container for the bg*/}
      <div className="jumbotron" style={{height:"500px"}}>
        <video autoPlay muted>
          <source src={Vid} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className={`container3 text-center ${visible ? "visible" : "hidden"}`}>
          {/* Search filed */}
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <div className="search-fields">
                <div className="form-group">
                  <i className="bx bx-navigation"></i>
                  <label htmlFor="sourceCity" className="form-label">From :</label>
                  <input className="form-control" list="sourceCityOptions" id="source" placeholder="Source City" value={formData.source} onChange={handleInputChange} />
                  <datalist id="sourceCityOptions">
                    <option value="Pune" />
                    <option value="Jaipur" />
                    <option value="Delhi" />
                  </datalist>
                </div>

                <span className="material-symbols-outlined">swap_horiz</span>


                <div className="form-group">
                  <i className="bx bx-map"></i>
                  <label htmlFor="destinationCity" className="form-label">To :</label>
                  <input className="form-control" list="destinationCityOptions" id="destination" placeholder="Destination City" value={formData.destination} onChange={handleInputChange} />
                  <datalist id="destinationCityOptions">
                    <option value="Mumbai" />
                    <option value="Lucknow" />
                    <option value="Hyderabad" />
                  </datalist>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="departDate" className="form-label" style={{fontWeight:"bold"}}>Depart :</label>
                <input type="date" className="form-control" id="departDate"  />
              </div>

              <button type="submit" className="btn-search">
                <i className="bx bx-search"></i> Search Availability
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-3 text-center">
        <h3 style={{ color: "rgb(31, 41, 182);" }}>
          <div className="scroll-container">
            <div className="scroll-down" onClick={handleScroll}></div>
            <div className="explore-text">Explore More...!</div>
          </div>
        </h3>
      </div>

      <div className="below"></div>
      {/* Ensure consistent spacing between headings and carousels */}
      <div className={`head1 ${animate ? "animate" : ""}` }>Where Tradition Meets Splendor: Top Indian Destinations</div>
      <Carousel />

      
      <div className={`head1 ${animate ? "animate" : ""}`}>Continue Your Journey of Discovery</div>
      <Carousel1 />

      <Footer1 />
    </div>
  );
};

export default Bus;
