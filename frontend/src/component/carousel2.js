import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/caro1.css"; // custom styles

const DestinationCarousel = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const destinations = [
    {
      title: "Jaipur, India",
      image: "https://media.istockphoto.com/id/524151419/photo/detail-of-decorated-gateway-amber-fort-jaipur-india.jpg?s=612x612&w=0&k=20&c=iRPrMFUhJNTrXM4ii-cI1fzgblsx6Bob9Np5mPyGZIw=",
      description: "The Pink City of royal palaces and vibrant culture.!",
      label: "Heritage",
    },
    {
      title: "Taj Mahal,India",
      image: "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
      description: "A symbol of love and an architectural marvel of India.",
      label: "Historical",
    },
    {
      title: "Manali, India",
      image: "https://himachaltourism.gov.in/wp-content/uploads/2019/04/Solang-Valley-Manali.jpg",
      description: "A Himalayan haven for adventure and peace.",
      label: "Mountain",
    },
    {
      title: "Sundarbans, India",
      image: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2021/06/pexels-photo-2689436.jpeg?ssl=1",
      description: "Sundarbans: Mangroves & Bengal Tigers.",
      label: "Wildlife",
    },
    {
      title: "Varanasi, India",
      image: "https://www.ramadajhvvns.com/blog/wp-content/uploads/2018/01/1-1.jpg",
      description: "Ancient city known for spirituality and culture.",
      label: "Spiritual",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Handle image click to navigate to the homepage or Bus component
  const handleImageClick = () => {
    navigate("/"); // Navigate to the homepage (or Bus page)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div className="carousel-card" key={index}>
            <img
              src={destination.image}
              alt={destination.title}
              onClick={handleImageClick} // On image click navigate
              style={{ cursor: "pointer" }} // Add a pointer cursor for better UX
            />
            <div className="carousel-content">
              <span className={`carousel-label ${destination.label.toLowerCase()}`}>
                {destination.label}
              </span>
              <h3>{destination.title}</h3>
              <p>{destination.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationCarousel;
