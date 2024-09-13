import React  from 'react';
import ProductGallery from './ProductGallery';

const WomensWear = () => {
  
  return (
    <div>
      <h1 style={{ textAlign: 'left', paddingLeft: '400px',marginBottom:'2px' }} >Womens</h1>
     
      <ProductGallery apiEndpoint="https://product-gallery.onrender.com/api/womenswear" category="womensWear" />

    </div>
  );
};


     

export default WomensWear;

    
          
