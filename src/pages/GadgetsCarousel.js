import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AutoSlideCarousel";

const Carousel = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const handleFetchProducts = async (query) => {
    try {
      const response = await fetch(
        `https://product-gallery.onrender.com/api/banner/bestselling-gadgets`
      );
      const data = await response.json();
      if (data.success === true) {
        // dispatch({ type: "SET_PRODUCTS", payload: data?.products });
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        console.log(data);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);
  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">BEST SELLING GADGETS</h2>
      <Slider {...settings}>
        {products.length > 0 &&
          products?.map((product) => (
            <div
              key={product._id}
              className="carousel-slide"
              onClick={() => {
                window.open(product.affiliateLink, "_blank");
              }}
            >
              {" "}
              <img
                src={product.image}
                alt={product.title}
                className="carousel-image"
              />
              <div className="carousel-description">{product.title}</div>
              <div className="carousel-promo">{product.description}</div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
