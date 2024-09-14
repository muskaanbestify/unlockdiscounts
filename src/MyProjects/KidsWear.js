import React from 'react';
import ProductGallery from './ProductGallery';

   const KidsWear = () => {
    
    return (
      <div>
        <h1 style={{ textAlign: 'left', paddingLeft: '200px', marginBottom:'2px' }} >Kids</h1>
        
        <ProductGallery apiEndpoint="https://product-gallery.onrender.com/api/kidswear" category="kidswear" />

      </div>
    );
  };    
  
export default KidsWear;