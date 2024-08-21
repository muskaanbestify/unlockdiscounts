import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FestivalSale.css';

const FestivalSale = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of the auto-scroll
    pauseOnHover: false, // Auto-scrolling won't stop when hovering
    arrows: false, // Remove navigation arrows
    cssEase: "ease-in",
    swipeToSlide: true,
  };

  const images = [
    { id: 1, src: '/AutoSlideCarousel/FreedomDay,png', alt: 'FreedomeDay' },
    { id: 2, src: '/AutoSlideCarousel/RakshaBandhan.png', alt: 'RakshaBandhan' },
    { id: 3, src: '/AutoSlideCarousel/FrienshipDay.png', alt: 'FrienshipDay' },
  ];

  return (
    <div className="festival-sale-wrapper">
      <div className="festival-sale-header">
        <div className="festival-sale-text">FESTIVAL SALE IS LIVE NOW</div>
      </div>
      <div className="festival-sale-container">
        <div className="festival-sale-container-slider">
            <Slider {...settings}>
            {images.map((image) => (
                <div key={image.id} className="festival-sale-slide">
                <img src={image.src} alt={image.alt} className="festival-sale-image" />
                </div>
            ))}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default FestivalSale;
