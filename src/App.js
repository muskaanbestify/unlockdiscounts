import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

const AppRoutes = lazy(() => import('./routes'));

const App = () => (
  <Router>
    <ScrollToTop /> {/* Place ScrollToTop here */}
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
    <Footer />
  </Router>
);

export default React.memo(App);
