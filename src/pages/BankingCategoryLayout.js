import React from 'react';
import './banking.css';

function BankingCategoryLayout({ categories }) {
  // Static product data for the Banking categories
  const products = [
    {
      title: 'Credit Card',
      category: 'Credit card',
      image: '/images/creditcard.png',
      description: 'Best credit card offers.',
      affiliateLink: '#',
    },
    {
      title: 'Zero Balance Savings Account',
      category: 'Zero Savings Account',
      image: '/images/savings.png',
      description: 'Zero balance savings account offers.',
      affiliateLink: '#',
    },
    {
      title: 'Savings Application',
      category: 'Saving Application',
      image: '/images/savingapp.png',
      description: 'Manage your savings efficiently.',
      affiliateLink: '#',
    },
  ];

  return (
    <div className="banking-page-container">
      <h1 className="banking-main-title">Banking Page</h1>
      <p className="banking-sub-description">
        Unlock Financial Freedom: Discover Smart Banking Solutions with Us!
      </p>
      {categories.map((category, index) => (
        <div key={index} className="banking-category-section">
          <h2 className="banking-category-title">{category.title}</h2>
          <div className="banking-product-cards">
            {products
              .filter((product) => product.category === category.title)
              .map((product, idx) => (
                <div key={idx} className="banking-product-card">
                  <div className="banking-product-details">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="banking-product-image"
                      loading="lazy"
                    />
                    <h3 className="banking-product-title">{product.title}</h3>
                    <p className="banking-product-description">
                      {product.description}
                    </p>
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banking-buy-now-button"
                    >
                      BUY NOW
                    </a>
                  </div>
                </div>
              ))}
            {products.filter((product) => product.category === category.title)
              .length === 0 && (
              <p>No products available in this category.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BankingCategoryLayout;
