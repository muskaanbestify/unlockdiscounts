import React, { useState, useEffect } from 'react';
import './WomensWear.css';

const ProductGallery = ({ apiEndpoint, category }) => {
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error('Resource not found');
        }
        const data = await response.json();

        console.log('API Response:', data); 

        if (Array.isArray(data[category])) {
          setProducts(data[category]);  
        } else {
          console.log('Unexpected data structure:', data);
          setProducts([]);  
        }
      } catch (error) {
        setError('Unable to fetch data. Please check your internet connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiEndpoint, category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  
  return (
    <div className="container">
    <div className="filter-section">
      {/*  add filter content */}
      
     </div>
    
  <div className="product-grid">
    {products.length > 0 ? (
      products.map((product) => (
        <div key={product._id} className="product-card">
       <img src={product.image} alt={product.title} className="product-image" />
       <h3 className="product-title">{product.title}</h3>
       <p className="product-description">{product.description}</p>
     </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
</div>
  );
};

export default ProductGallery;
