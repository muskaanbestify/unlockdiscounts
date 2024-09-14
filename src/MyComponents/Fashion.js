import React from 'react';
import { Link } from 'react-router-dom';
import './Fashion.css'; 


const Fashion = () => {
 
 return(
  <div className="main-layout">
     <h1 style={{ textAlign: 'left', paddingLeft: '20px' }} >Fashion</h1>
    <nav>
      <ul className="nav-list" >
     <li className="nav-item"  >
       
    <Link to="/menswear">
        <img  src="\Images\menswearbanner.avif" alt="Men's Wear" className="category-image" />
      </Link>
      <h2>Men's Wear</h2>
      <p>Discover stylish and comfortable clothing options for men.</p>
      </li>
      
      <li className="nav-item"  >
    <Link to="/womenswear">
        <img width={430} src="\Images\womenswearbanner.avif" alt="Women's Wear" className="category-image" />
      </Link>
      <h2>Women's Wear</h2>
      <p>Explore the latest trend in women's fashion and find your perfect outfit.</p>
      </li>
      <li className="nav-item" >
      <Link to="/kidswear">
        <img width={430} src="\Images\kidswearbanner.avif" alt="Kid's Wear" className="category-image" />
      </Link>
      <h2>Kid's Wear</h2>
      <p>Find the cutest and most trendy clothes for kids of all ages.</p>
      </li>
      </ul>
      </nav>
      </div>
);
};

export default Fashion;