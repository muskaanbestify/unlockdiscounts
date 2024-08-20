import React from 'react';
import './BrandBanner.css';

function BrandBanner() {
  
  const brandList = [
    '/Brandbanner/amazon.png',
    '/Brandbanner/myntra.png',
    '/Brandbanner/meesho.png',
    '/Brandbanner/flipkart.png',
    '/Brandbanner/ajio.png',
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
