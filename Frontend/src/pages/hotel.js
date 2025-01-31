import React, { useState } from "react";
import axios from "axios";
import "../styels/hotel2.css";
import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="logo">
        ADVENTURE ATLAS
      </a>
      <a href="#rooms">HOME</a>
      <a href="#about">BUS</a>
      <a href="#contact">FLIGHT</a>
      <a href="#about">TRAIN</a>
      <a href="#about">HOTEL</a>
      <a href="#about">ITINERARY BUILDER</a>
      <a href="#about" className="nav-link login-signup">
        LOGIN/SIGN UP
      </a>
    </div>
  );
}

function Header({ setHotels }) {
  const [destination, setDestination] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8001/api/hotels/search?destination=${destination}`
      );
      setHotels(response.data); 
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setHotels([]); 
    }
  };

  return (
    <header>
      <img className="hotel-image" src="hotel2.webp" alt="The Hotel" />
      <div className="header-content">
        <div className="book-now-container">
          <div className="book-now-title">
            <h2>Book your hotels now</h2>
          </div>
          <div className="book-now-form">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <div className="input-item">
                  <label>
                    <i className="fa fa-calendar-o"></i> Check In
                  </label>
                  <input type="date" name="CheckIn" required />
                </div>
                <div className="input-item">
                  <label>
                    <i className="fa fa-calendar-o"></i> Check Out
                  </label>
                  <input type="date" name="CheckOut" required />
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label>
                    <i className="fa fa-male"></i> Adults
                  </label>
                  <input type="number" name="Adults" min="1" defaultValue="1" />
                </div>
                <div className="input-item">
                  <label>
                    <i className="fa fa-location-arrow"></i> Destination
                  </label>
                  <input
                    type="text"
                    name="Destination"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit">
                <i className="fa fa-search"></i> Search availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

function Rooms({ hotels }) {
  const roomTypes = [
    {
      image: "single room.jpg",
      title: "Single Room",
      price: "$99",
      description: "Single bed, 15m²",
      icons: ["fa-bath", "fa-phone", "fa-wifi"],
    },
    {
      image: "double room.avif",
      title: "Double Room",
      price: "$149",
      description: "Queen-size bed, 25m²",
      icons: ["fa-bath", "fa-phone", "fa-wifi", "fa-tv"],
    },
    {
      image: "deluxe room.jpeg",
      title: "Deluxe Room",
      price: "$199",
      description: "King-size bed, 40m²",
      icons: ["fa-bath", "fa-phone", "fa-wifi", "fa-tv", "fa-glass", "fa-cutlery"],
    },
  ];

  return (
    <div id="rooms" className="content" style={{ padding: "20px" }}>
      <div className="section" style={{ marginBottom: "20px" }}>
        <h3>ROOMS</h3>
        <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
      </div>

      <div className="rooms" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Show default room types before the search */}
        {hotels.length === 0 && roomTypes.map((room, index) => (
          <div key={index} className="room" style={{ width: "calc(33.33% - 20px)", boxSizing: "border-box" }}>
            <img src={room.image} alt={room.title} style={{ width: "100%", height: "auto" }} />
            <div className="room-info" style={{ padding: "10px" }}>
              <h3>{room.title}</h3>
              <h6>From {room.price}</h6>
              <p>{room.description}</p>
              <p>
                {room.icons.map((icon, i) => (
                  <i className={`fa ${icon}`} key={i} style={{ marginRight: "8px" }}></i>
                ))}
              </p>
              <button className="choose-room" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}>Choose Room</button>
            </div>
          </div>
        ))}


        {/* Show results after searching for hotels */}
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <div
              key={index}
              className="hotel"
              style={{
                width: "48%", 
                boxSizing: "border-box",
                marginBottom: "20px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f4f4f4",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "500px", 
                  margin: "auto",
                }}
              >
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="hotel-image"
                  style={{
                    width: "80%",
                    height: "auto",
                    maxHeight: "200px", 
                    objectFit: "cover", 
                    borderRadius: "8px",
                  }}
                />
                <div className="hotel-info" style={{ padding: "10px" }}>
                  <h4>{hotel.name}</h4>
                  <p><strong>Location:</strong> {hotel.destination}</p>
                  <p><strong>Price per Night:</strong> ${hotel.price_per_night}</p>
                  <p><strong>Amenities:</strong> {hotel.amenities.join(", ")}</p>

                  {/* Rooms section */}
                  <div className="rooms-list">
                    <p><strong>Available Rooms:</strong></p>
                    {hotel.rooms.filter(room => room.isAvailable).map((room, idx) => (
                      <div
                        key={idx}
                        className="room"
                        style={{
                          marginBottom: "5px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <p>{room.type}</p>
                        <p><strong>Room Number:</strong>{room.roomNumber}</p>
                        <p><strong>Price:</strong> ${room.price}/night</p>
                        <p><b>Status:</b> {room.isAvailable ? "Available" : "Booked"}</p>
                        <button
                          className="choose-room"
                          style={{
                            padding: "10px",
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "5px",
                            marginTop: "10px",
                          }}
                          onClick={() => window.location.href = `https://www.makemytrip.com/hotels/`} 
                        >
                          Choose Room
                        </button>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found.</p>
        )}


      </div>
    </div>
  );
}


function App() {
  const [hotels, setHotels] = useState([]); 

  return (
    <div>
      <Navbar />
      <Header setHotels={setHotels} />
      <Rooms hotels={hotels} />
    </div>
  );
}

export default App;
