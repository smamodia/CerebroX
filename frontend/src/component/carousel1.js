import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/caro2.css";

const DestinationCarousel = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const destinations = [
    {
      title: "New York City, USA",
      image: "https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary.jpg.webp",
      description: "The city that never sleeps, from Times Square to the Statue of Liberty."
    },
    {
      title: "Paris, France",
      image: "https://bucketlistbums.com/wp-content/uploads/2023/07/Paris_France_Day4_6001-scaled.jpg",
      description: "The city of love, home to the iconic Eiffel Tower and rich art culture."
    },
    {
      title: "Tokyo, Japan",
      image: "https://www.danflyingsolo.com/wp-content/uploads/2020/03/Tokyo-Temple.jpg",
      description: "A futuristic city blending modern skyscrapers with traditional temples."
    },
    {
      title: "Bali, Indonesia",
      image: "https://media.worldnomads.com/explore/bali/pura-batran-water-temple-hero.jpg",
      description: "A tropical paradise of beaches, temples, and serene landscapes."
    },
    {
      title: "Rome, Italy",
      image: "https://media.tacdn.com/media/attractions-splice-spp-400x400/12/32/04/2d.jpg",
      description: "The Eternal City, famous for the Colosseum and its rich history."
    },
    {
      title: "Sydney, Australia",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=1200&h=-1&s=1",
      description: "A vibrant city known for the Sydney Opera House and Harbour Bridge."
    },
    {
      title: "Dubai, UAE",
      image: "https://www.airpano.ru/files/dubai-uae/images/image1.jpg",
      description: "A city of luxury, home to the Burj Khalifa and modern architecture."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
