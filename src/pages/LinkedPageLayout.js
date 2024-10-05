import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import FilterBox from "../components/FilterBox";
import "./productgallery.css";

const LinkedPageLayout = ({
  category,
  title,
  page = 1,
  extraPage,
  handleLoadMoreProducts,
}) => {
  const { state, handleLoadMore, hasMore } = useContext(ProductContext);
  const { products, loading, error } = state;
  const [filterOpen, setFilterOpen] = useState(false);

  // Total number of products
  const totalProducts = products.length;

  useEffect(() => {
    console.log("Products: in trending => ", products);
  }, [products]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        hasMore
      ) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, handleLoadMore]);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  // Function to load more products based on pagination
  const handleNextPage = (newPage) => {
    const url = window.location.href;
    let queryString = new URLSearchParams(url.split("?")[1]);

    // Update the page query parameter
    queryString.set("page", newPage);

    const updatedQueryString = `${url.split("?")[0]}?${queryString.toString()}`;

    console.log("updatedQuery", updatedQueryString);
    window.open(updatedQueryString, "_self"); // Navigate to the updated URL
    handleLoadMoreProducts(queryString.toString());
  };

  if (loading && products.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="layout-container">
      {/* Filter Box for larger screens */}
      <div className="filter-box">
        <FilterBox />
      </div>

      {/* Product gallery */}
      <div className="productpage-container">
        <div className="title-container">
          <h2 className="category-title">{title}</h2>
          <div className="title-info">
            <p className="product-count">
              {products.length} out of {totalProducts} products
            </p>
            <img
              className="filter-icon"
              src="/path-to-filter-icon.png" // Ensure this path is correct
              alt="Filter Icon"
              onClick={toggleFilter}
            />
          </div>
        </div>

        <div className="product-cards">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img loading="lazy" src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-now-button"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        {products && products.length > 0 && (
          <div className="pagination-buttons" style={paginationStyles}>
            {page > 1 && (
              <button
                style={paginationButtonStyles}
                onClick={() => handleNextPage(page - 1)}
              >
                Prev
              </button>
            )}
            <button style={activePageButtonStyles}>{page}</button>
            {extraPage > 0 && (
              <button
                style={paginationButtonStyles}
                onClick={() => handleNextPage(page + 1)}
              >
                {page + 1}
              </button>
            )}
            {extraPage > 1 && (
              <button
                style={paginationButtonStyles}
                onClick={() => handleNextPage(page + 2)}
              >
                More
              </button>
            )}
          </div>
        )}

        {loading && <div>Loading more products...</div>}
      </div>

      {/* Fullscreen Filter Overlay */}
      {filterOpen && (
        <div className="filter-overlay open">
          <button onClick={toggleFilter} className="close-button">
            Close
          </button>
          <FilterBox />
        </div>
      )}
    </div>
  );
};

const paginationStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "20px 0",
};

const paginationButtonStyles = {
  backgroundColor: "white",
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "5px 10px",
  cursor: "pointer",
};

const activePageButtonStyles = {
  backgroundColor: "black",
  color: "white",
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "5px 10px",
  cursor: "pointer",
};

export default LinkedPageLayout;
