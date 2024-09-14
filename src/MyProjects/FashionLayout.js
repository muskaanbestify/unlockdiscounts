import React, { useState, useEffect } from 'react';
import './FashionLayout.css';

const FashionLayout = ({ apiEndpoint, category }) => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsPerPage] = useState(9);


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
          setTotalPages(Math.ceil(data[category].length / productsPerPage)); 
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
    
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    let pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers = [1, 2, 3, '...', totalPages - 1, totalPages];
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers = [1, 2, 3, '...', currentPage, '...', totalPages - 1, totalPages];
      } else {
        pageNumbers = [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
      }
    }
    return pageNumbers;
  };
    
   if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  
  return (
    <div>
    <div className="container">
    <div className="filter-section">
      {/*  add filter content */}
    </div>
    
  <div className="product-grid">
    {paginatedProducts.length > 0 ? (
      paginatedProducts.map((product) => (
        <div key={product._id} className="product-card">
      <div  className="product-image" >
       <img src={product.image} alt={product.title} className="product-image" />
       </div>
      <div className="product-title" >
       <h3>{product.title}</h3>
       </div>
       <div className="product-description" >
       <p>{product.description}</p>
       </div>
     </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
  </div>
   
       {/* Pagination */}
       <div className="pagination-controls">
       <button
          className="previous-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <div className="page-number-container">
          {getPageNumbers().map((page, index) =>
            page === '...' ? (
              <span key={index} className="page-number">...</span>
            ) : (
              <button
                key={page}
                className={`page-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
              </div>

     <button
  className="next-button"
  onClick={() => handlePageChange(currentPage + 1)}
  disabled={currentPage === totalPages}
    >
    Next →
</button>
</div>
        
      </div>
  
      );
};

export default FashionLayout;
