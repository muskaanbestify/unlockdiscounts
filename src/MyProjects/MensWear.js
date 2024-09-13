import React  from 'react';
import ProductGallery from './ProductGallery'; 

const MensWear = () => {

  return (
    <div>
      <h1 style={{ textAlign: 'left', paddingLeft: '200px',marginBottom:'2px' }} >Mens</h1>

      <ProductGallery apiEndpoint="https://product-gallery.onrender.com/api/menswear" category="mensWear" />

    </div>
  );
};
 
export default MensWear;