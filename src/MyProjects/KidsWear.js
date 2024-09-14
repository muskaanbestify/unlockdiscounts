import React from 'react';
import FashionLayout from './FashionLayout'; 

   const KidsWear = () => {
    
    return (
      <div>
        <h1 style={{ textAlign: 'left', paddingLeft: '200px', marginBottom:'2px' }} >Kids</h1>
        
        <FashionLayout apiEndpoint="https://product-gallery.onrender.com/api/kidswear" category="kidswear" />

      </div>
    );
  };    
  
export default KidsWear;