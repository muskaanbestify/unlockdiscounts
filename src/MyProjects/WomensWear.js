import React  from 'react';
import FashionLayout from './FashionLayout'; 

const WomensWear = () => {
  
  return (
    <div>
      <h1 style={{ textAlign: 'left', paddingLeft: '200px',marginBottom:'2px' }} >Womens</h1>
     
      <FashionLayout apiEndpoint="https://product-gallery.onrender.com/api/womenswear" category="womensWear" />

    </div>
  );
};


     

export default WomensWear;

    
          
