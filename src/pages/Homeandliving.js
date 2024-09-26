import React, { useState } from "react";
import "./Homeandliving.css";

// ProductCard component for rendering individual product
const ProductCard = ({ image, title, description }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

const HomeAndLiving = () => {
    // Sample product data
    const products = [
        { image: "https://m.media-amazon.com/images/I/51N25bDWgUL._SX679_.jpg", title: "Product 1", description: "Description of first product" },
        { image: "https://m.media-amazon.com/images/I/71NyV3Z6atL._AC_UY327_FMwebp_QL65_.jpg", title: "Product 2", description: "Description of second product" },
        { image: "https://m.media-amazon.com/images/I/51fZn4AsGfL._AC_UY327_FMwebp_QL65_.jpg", title: "Product 3", description: "Description of third product" },
        { image: "https://m.media-amazon.com/images/I/51BgScyg2qL._AC_UY327_FMwebp_QL65_.jpg", title: "Product 4", description: "Description of fourth product" },
        { image: "https://m.media-amazon.com/images/I/517nDmj1i8L._AC_UY327_FMwebp_QL65_.jpg", title: "Product 5", description: "Description of fifth product" },
        { image: "https://m.media-amazon.com/images/I/71NZiryyhbL._AC_UY327_FMwebp_QL65_.jpg", title: "Product 6", description: "Description of sixth product" },
        { image: "https://images-eu.ssl-images-amazon.com/images/I/51LzGChxNlL._AC_UL330_SR330,330_.jpg", title: "Product 7", description: "Description of seventh product" },
        { image: "https://images-eu.ssl-images-amazon.com/images/I/61ukOt2g0JL._AC_UL330_SR330,330_.jpg", title: "Product 8", description: "Description of eighth product" },
        { image: "https://m.media-amazon.com/images/I/61nQToWoEZL._AC_UL400_.jpg", title: "Product 9", description: "Description of ninth product" },
        { image: "https://m.media-amazon.com/images/I/51N25bDWgUL._SX679_.jpg", title: "Product 10", description: "Description of tenth product" }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("Most Popular");

    const productsPerPage = 3;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Handle sort change (placeholder logic)
    const handleSortChange = (option) => {
        setSortOption(option);
        // Sorting logic can be implemented here
    };

    return (
        <div className="Homeandliving-part">
            <div className="top-section">
                <h3>Home and Living</h3>
                <div className="product-info">
                    <span>Showing {indexOfFirstProduct + 1}-{indexOfLastProduct} of {products.length} Products</span>
                    <span onClick={() => handleSortChange("Most Popular")}>Sort by: {sortOption} &#9660;</span>
                </div>
            </div>

            <div className="product-grid">
                {currentProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>

            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="page-number">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default HomeAndLiving;
