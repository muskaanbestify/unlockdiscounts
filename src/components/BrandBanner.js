import React from 'react';
import './BrandBanner.css';

function BrandBanner() {
  
  const brandList = [
    '/banners/amazon.png',
    '/banners/myntra.png',
    '/banners/meesho.png',
    '/banners/flipkart.png',
    '/banners/ajio.png',
  ];

    //   console.log('brandlist:', brandList);
    return (
      <div className='brand-banner'>
      {brandList?.map(brands => {
        if (brands === '/banners/myntra.png' || brands === '/banners/flipkart.png') {
          return <img className='brand-unfit-logo' src={brands} />
        }
        else {
          return <img className='brand-logo' src={brands} />
        }
      })}
    </div>
    )
}

export default BrandBanner;