// 

import React from "react";
import "./Homeandliving.css";

const HomeAndLiving = () => {
    return (
        <div className="Homeandliving-part">
            <div className="top-section">
                <h3>Homeandliving</h3>
                <div className="product-info">
                    <span>Showing 1-10 of 100 Products </span>
                    <span>Sort by: Most Popular &#9660;</span>
                </div>
            </div>
            <div className="row1">
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/61lHobSCOML._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 1</h4>
                    <p>Description of first product</p>
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/417Di8d6xIL._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 2</h4>
                    <p>Description of second product</p>
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/61s-3q6CYxL._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 3</h4>
                    <p>Description of third product</p>
                </div>
            </div>
            <div className="row2">
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/81r4-kfrAvL._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 1</h4>
                    <p>Description of first product</p>
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/51mQJbQWmFL._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 2</h4>
                    <p>Description of second product</p>
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/21rFLTV3tML._AC_UL480_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 3</h4>
                    <p>Description of third product</p>
                </div>
            </div>
            <div className="row3">
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/41nclnxOSLL._AC_UL480_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 1</h4>
                    <p>Description of first product</p>
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/61iLrKLDC4L._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 2</h4>
                    <p>Description of second product</p>
                </div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/51NbaPIA9SL._AC_UL480_FMwebp_QL65_.jpg"
                        alt="slider"
                    />
                    <h4>Product 3</h4>
                    <p>Description of third product</p>
                </div>
            </div>
            <div className="pagination">
                <button>Previous</button>
                <span className="page-number">
                    <button>1</button>
                    <button>2</button>
                    <span>...</span>
                    <button>9</button>
                    <button>10</button>
                </span>
                <button>Next</button>
            </div>
        </div>
    );
};
export default HomeAndLiving;