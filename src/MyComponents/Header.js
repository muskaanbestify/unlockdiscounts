import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 


const Header = () => {
 
 return(
  <div className="main-layout">
     <h1 style={{ textAlign: 'left', paddingLeft: '10px' }} >Fashion</h1>
    <nav>
      <ul className="nav-list" style={{ display: 'flex', justifyContent:'space-around', listStyleType : 'none', padding: 0 }} >
     <li className="nav-item" style={{ textAlign: 'center', width: '30%' }} >
       
    <Link to="/menswear">
        <img width={430} src="\Images\menswearbanner.avif" alt="Men's Wear" className="category-image" />
      </Link>
      <h2 style={{ marginTop: '10px', textAlign: 'left' }} >Men's Wear</h2>
      <p style={{ textAlign: 'left' }} >Discover stylish and comfortable clothing options for men.</p>
      </li>
      
      <li className="nav-item" style={{ textAlign: 'center',width: '30%' }} >
    <Link to="/womenswear">
        <img width={419} src="\Images\womenswearbanner.avif" alt="Women's Wear" className="category-image" />
      </Link>
      <h2  style={{ marginTop: '10px', textAlign: 'left' }} >Women's Wear</h2>
      <p style={{ textAlign: 'left' }} >Explore the latest trends in women's fashion and find your perfect outfit.</p>
      </li>
      <li className="nav-item"style={{ textAlign: 'center',  }} >
      <Link to="/kidswear">
        <img width={430} src="\Images\kidswearbanner.avif" alt="Kid's Wear" className="category-image" />
      </Link>
      <h2  style={{ marginTop: '10px', textAlign: 'left' }} >Kid's Wear</h2>
      <p style={{ textAlign: 'left' }} >Find the cutest and most trendy clothes for kids of all ages.</p>
      </li>
      </ul>
      </nav>
      </div>
);
};

export default Header;