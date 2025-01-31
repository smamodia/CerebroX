import React, { useState } from "react";
import Calendar from "react-calendar";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; 
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const destinations = [
    { title: "New York City", image: "https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary.jpg.webp" },
    { title: "Paris", image: "https://bucketlistbums.com/wp-content/uploads/2023/07/Paris_France_Day4_6001-scaled.jpg" },
    { title: "Tokyo", image: "https://www.danflyingsolo.com/wp-content/uploads/2020/03/Tokyo-Temple.jpg" },
    { title: "Bali", image: "https://media.worldnomads.com/explore/bali/pura-batran-water-temple-hero.jpg" },
    { title: "Rome", image: "https://media.tacdn.com/media/attractions-splice-spp-400x400/12/32/04/2d.jpg" },
    { title: "Sydney", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=1200&h=-1&s=1" },
    { title: "Dubai", image: "https://www.airpano.ru/files/dubai-uae/images/image1.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleImageClick = () => {
    navigate("/");
  };

  return (
    <div style={{ 
      width: "100%", 
      margin: "auto", 
      textAlign: "center",
      alignContent:"center", 
      padding: "20px", 
      border: "1px solid #ddd", 
      borderRadius: "10px", 
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h5 style={{ marginBottom: "15px",fontWeight: "bold", color:"red" }}>Calendar</h5>
      <Calendar 
        onChange={setDate} 
        value={date} 
        style={{ marginBottom: "20px" }} 
      />
      <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "30px",alignContent:"center" }}>
        Selected Date: {date.toDateString()}
      </p>

      {/* Destination Carousel Section */}
      <h5 style={{ marginBottom: "15px", fontWeight: "bold", color:"red"}}>Top Destinations</h5>
      <div style={{ width: "90%", margin: "auto" }}>
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <img
                src={destination.image}
                alt={destination.title}
                onClick={handleImageClick}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", cursor: "pointer" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CalendarComponent;
