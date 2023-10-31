import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopForm from './Newshop';
import ProductForm from './Newproduct';
import Navigation from './Navigation';


function App() {
  return (
    <Router>
      <div>
        <Navigation /> 
        <Routes>
          <Route path="/newshop" element={<ShopForm />} />
          <Route path="/newproduct" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
