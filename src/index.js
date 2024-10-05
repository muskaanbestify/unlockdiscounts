import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your context providers
import { ProductProvider } from './contexts/ProductContext';
import { VerifyProvider } from './contexts/VerifyContext'; // Import your VerifyContext

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ProductProvider>
      <VerifyProvider> {/* Wrap App with both providers */}
        <App />
      </VerifyProvider>
    </ProductProvider>
  </React.StrictMode>
);
