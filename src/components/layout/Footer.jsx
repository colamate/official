import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">ColaJS</div>
          
          <div className="footer-links">
            <Link to="https://colajs.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              官网
            </Link>
            <Link to="mailto:contact@colajs.com" className="footer-link">
              联系我们
            </Link>
          </div>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} ColaJS. AI全栈开发 - AI一站式服务生态建设
        </div>
      </div>
    </footer>
  );
};

export default Footer;