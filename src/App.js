import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UpdatedFooter from '.components/UpdatedFooter';
import Thankyou from '.components
const AppRoutes = lazy(() => import('./routes')); 

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>

  <UpdatedFooter/>
    <Footer />
  </Router>
);

export default React.memo(App); 

