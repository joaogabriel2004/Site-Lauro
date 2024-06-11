import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css'
import ProductPage from './components/pages/HomePage/ProductPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/other" element={<ProductPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
