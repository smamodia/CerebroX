import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/detail.css"; // Ensure custom styles are applied
import Navbar1 from "../component/navbar";
import Calendar from "../component/calender";
import Footer from "../component/footer";


const bookNowButton = (url) => (
  <button
    className="book-now-btn"
    onClick={() => window.location.href = url}
  >
    Book now
  </button>
);

const TransportDetails = () => {
  const { state } = useLocation();
  const { results, type } = state;

  return (
    <div>
      <Navbar1 />
      <div className="container-fluid text-center">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-sm-12 col-md-3 left-sidebar">
            <div className="well">
              <Calendar />
            </div>
                        <p>
              <Link to="/">Bus</Link>
            </p>
            <p>
              <Link to="/flights">Flight</Link>
            </p>
            <p>
              <Link to="/trains">Train</Link>
            </p>
          </div>

          {/* Main Content Area */}
          <div className="col-sm-12 col-md-9 middle-content">
            <div id="details">
              {results.map((item, index) => (
                <div key={index} className="detail-card">
                  <div className="general-header">
                    <h3>
                      {type === "bus" && item.bus_company}
                      {type === "train" && item.train_company}
                      {type === "flight" && item.airline}
                    </h3>
                    <hr />
                  </div>
                  <div className="general-info">
                    <p><strong>Source:</strong> {item.source}</p>
                    <p><strong>Destination:</strong> {item.destination}</p>
                    <p><strong>Duration:</strong> {item.duration}</p>
                  </div>
                  {type === "bus" && (
                    <>
                      <p><strong>Price:</strong> {item.price || "Not Specified"}</p>
                      {bookNowButton("https://www.makemytrip.com/bus-tickets/")}
                    </>
                  )}
                  {type === "train" && (
                    <>
                      <p><strong>Class:</strong> {item.class}</p>
                      <p><strong>Price:</strong> {item.price || "Not Specified"}</p>
                      {bookNowButton("https://www.makemytrip.com/railways/")}
                    </>
                  )}
                  {type === "flight" && (
                    <>
                      <p><strong>Price (One-Way):</strong> {item.price_one_way || "Not Specified"}</p>
                      <p><strong>Price (Return):</strong> {item.price_return || "Not Specified"}</p>
                      {bookNowButton("https://www.makemytrip.com/flights/")}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          
          
        </div>
      </div>

      {/* Footer */}
      
     <Footer/>
    </div>
  );
};

export default TransportDetails;
