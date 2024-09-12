import React, { useState, useEffect } from 'react';
import './WomensWear.css'; 
const WomensWear = () => {
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://product-gallery.onrender.com/api/womenswear');
        if (!response.ok) {
          throw new Error('Resource not found');
        }
        const data = await response.json();
        
        setProducts(data.womensWear);    
      } catch (error) {
        setError('Unable to fetch data. Please check your internet connection');  
      } finally {
        setLoading(false);        
      }
    };

    fetchProducts(); 
  }, []);

  if (loading){
    return <p>Loading...</p>; 
  }      
  if (error) {
    return <p>Error: {error}</p>;   
  }  

  return (
    <div>
      <h1 style={{ textAlign: 'left', paddingLeft: '100px' }}>WOMENS</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
           <img src={product.image} alt={product.title} className="product-image" />
           <h3 style={{ textAlign: 'left', paddingLeft: '10px' }} className="product-title">{product.title}</h3>
           <p  style={{ textAlign: 'left', paddingLeft: '10px' }} className="product-description">{product.description}</p>
         </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default WomensWear;

    
          
