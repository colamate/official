import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import Demo from './pages/Demo';
import './index.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`app-layout ${isHome ? 'app-home' : 'app-page'}`}>
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;