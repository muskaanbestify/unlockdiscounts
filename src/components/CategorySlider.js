import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './categoryslider.css';

// Dummy image source; replace with actual image URLs
const categories = [
  { name: 'Men', img: './CategorySlider/mens.png', path: '/fashion/mens-wear' }, // Added path
  { name: 'Women', img: './CategorySlider/womens.png', path: '/fashion/womens-wear' },
  { name: 'Kid', img: './CategorySlider/kids.png', path: '/fashion/kids-wear' },
  { name: 'Skincare', img: './CategorySlider/skincare.jpg', path: '/beauty' },
  { name: 'Beauty', img: './CategorySlider/makeup.jpg', path: '/beauty' },
  { name: 'Home', img: './CategorySlider/homedecor.png', path: '/home-and-living' },
  { name: 'Gadgets', img: './CategorySlider/gadgets.jpg', path: '/electronics/mobiles-accessories' }
];

const CategorySlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5, // Number of categories visible at a time
        slidesToScroll: 1,
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className='slide'>
                        <div className='gradient-container'>
                            <Link to={category.path}> {/* Make the image clickable */}
                                <img className='category-image' src={category.img} alt={category.name} />
                            </Link>
                        </div>
                        <p className='category-slider-text'>
                            {category.name}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategorySlider;
