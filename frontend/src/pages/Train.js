import React, { useEffect, useState } from "react";
import Carousel from "../component/carousel2";
import Carousel1 from "../component/carousel1";
import "../styles/train.css";
import Navbar from "../component/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer1 from "../component/footer";

const TrainApp = () => {
  const [typingText, setTypingText] = useState("");
  const text = "Rail Your Way...Uncover the joy of train travel.!";
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    departDate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeEffect = () => {
      if (index < text.length) {
        setTypingText(text.substring(0, index + 1));
        index++;
        setTimeout(typeEffect, 200);
      } else {
        setTimeout(() => {
          setTypingText("");
          index = 0;
          typeEffect();
        }, 3000);
      }
    };
    typeEffect();
  }, []);

  const handleScrollDown = () => {
    document.getElementById("nextCont").scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.source || !formData.destination) {
      alert("Please fill in both source and destination.");
      return;
    }

    console.log("Form Data:", formData); // Debug form data

    try {
      const response = await axios.get("http://localhost:8000/api/train", {
        params: {
          source: formData.source,
          destination: formData.destination,
        },
      });
      console.log("API Response:", response.data); // Debug API response
      navigate("/details", { state: { results: response.data, type: "train" } });
    } catch (error) {
      console.error("Error fetching train details:", error.message);
      alert(error.response?.data?.message || "No trains found. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="jumbotron">
        <div className="typing-container text-center">
          <div id="typing-text">{typingText}</div>
        </div>

        {/* Search Container */}
        <div className="container1 text-center">
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <div className="search-fields">
                {/* Source City Input */}
                <div className="form-group">
                  <i className="bx bx-train"></i>
                  <label htmlFor="source" className="form-label">From:</label>
                  <input
                    className="form-control"
                    list="sourceCityOptions"
                    id="source"
                    placeholder="Source City"
                    value={formData.source}
                    onChange={handleInputChange}
                  />
                  <datalist id="sourceCityOptions">
                    <option value="Jaipur" />
                    <option value="New York" />
                    <option value="Seattle" />
                    
                  </datalist>
                </div>

                <div className="icon-container">
                  <i className="bx bx-transfer icon-fill"></i>
                </div>

                {/* Destination City Input */}
                <div className="form-group">
                  <i className="bx bx-train"></i>
                  <label htmlFor="destination" className="form-label">To:</label>
                  <input
                    className="form-control"
                    list="destinationCityOptions"
                    id="destination"
                    placeholder="Destination City"
                    value={formData.destination}
                    onChange={handleInputChange}
                  />
                  <datalist id="destinationCityOptions">
                    <option value="Pune" />
                    <option value="Mumbai" />
                    
                  </datalist>
                </div>
              </div>

              {/* Depart Date Field */}
              <div className="form-group">
                <label htmlFor="departDate" className="form-label" style={{ fontWeight: "bold" }}>Depart:</label>
                <input
                  type="date"
                  className="form-control"
                  id="departDate"
                  value={formData.departDate}
                  onChange={handleInputChange}
                />
              </div>

              {/* Search Button */}
              <button type="submit" className="btn-search">
                <i className="bx bx-search"></i> Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <h3 style={{ color: "rgb(31, 41, 182)" }}>
          <div className="scroll-container">
            <div className="scroll-down" onClick={handleScrollDown}></div>
            <div className="explore-text">Explore More...!</div>
          </div>
        </h3>
        <br />
      </div>

      <div id="nextCont"></div>

      <div className={`head1 ${animate ? "animate" : ""}`}>Where Tradition Meets Splendor: Top Indian Destinations</div>
      <Carousel />
      <div className={`head1 ${animate ? "animate" : ""}`}>Continue Your Journey of Discovery</div>
      <Carousel1 />

      <Footer1/>
    </div>
  );
};

export default TrainApp;
