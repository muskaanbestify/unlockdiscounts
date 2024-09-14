import './Beauty.css';
import React from 'react'

const Beauty = () => {
  return (
    <div className='beauty-part'>
      <div className="beauty-header">
          <h1 className="category-title" style={{paddingLeft: "105px",fontFamily:"Notable",fontSize:"50px"}}>BEAUTY</h1>
          <div className="product-info">
          <span>Showing 1-10 of 100 Products </span>
          <div className="sort-dropdown" style={{fontSize:"16px"}}>
          Sort by:
          <select>
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          </select>
          </div>
          </div>
          </div>

          {/* beauty images start */}
      <div className='row1'>
        <div>
        <img src="https://m.media-amazon.com/images/I/71urWhn+x-L._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
            <h4>Product 1</h4>
            <p>Description of first product</p>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/61leqX+hJTS._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/81oQJwz0ZiS._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        </div>
        <div className='row2'>
        <div>
        <img src="https://m.media-amazon.com/images/I/61FDV10Re5L._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71LrRsTNx7L._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/61hlWpHyV5L._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        </div>
        <div className='row3'>
        <div>
            <img src="https://m.media-amazon.com/images/I/51YlmV6WspL._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
            <h4>Product 1</h4>
            <p>Description of first product</p>
          </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/6191vOhdx8L._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/41GYfdZdqlL._AC_UL480_FMwebp_QL65_.jpg" alt="slider" />
        <h4>Product 1</h4>
        <p>Description of first product</p>
        </div>
        </div>

        <div class="pagination">
    <button class="prev-button">← Previous</button>
    <div class="page-numbers">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>...</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
    <button class="next-button">Next →</button>
    </div>
    </div>
  )
}

export default Beauty
