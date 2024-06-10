import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css'
import HomePage from './components/pages/HomePage/HomePage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/other" element={<HomePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
