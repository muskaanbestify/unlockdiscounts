import React ,{ Component } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import MensWear from './MyProjects/MensWear';
import WomensWear from './MyProjects/WomensWear';
import KidsWear from './MyProjects/KidsWear';
import Fashion from './MyComponents/Fashion';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Fashion />} />
        <Route path="/menswear" element={<MensWear />} />
        <Route path="/womenswear" element={<WomensWear />} />
        <Route path="/kidswear" element={<KidsWear />} />

      </Routes>
    </Router>
  );
}

export default App;

   
