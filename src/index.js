import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  </>
);


