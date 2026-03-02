import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '关于我们', path: '/about' },
    { name: '博客', path: '/blog' },
    { name: 'Demo', path: '/demo' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          ColaJS
        </Link>

        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-item"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/demo" className="nav-cta">
            立即体验
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;