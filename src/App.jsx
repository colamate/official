import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import Demo from './pages/Demo';

const themeConfig = {
  token: {
    colorPrimary: '#1677FF',
    colorPrimaryBg: '#E6F4FF',
    colorSuccess: '#52C41A',
    colorWarning: '#FAAD14',
    colorError: '#FF4D4F',
    colorText: '#333333',
    colorTextSecondary: '#666666',
    colorBgLayout: '#F5F5F5',
    borderRadius: 6,
    borderRadiusLG: 12,
    borderRadiusSM: 4,
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeSM: 12,
    lineHeight: 1.5,
    lineWidth: 1,
    wireframe: false,
  },
  components: {
    Button: {
      borderRadius: 6,
      borderRadiusLG: 8,
      fontSize: 14,
      fontWeight: 500,
    },
    Card: {
      borderRadiusLG: 12,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    },
    Tabs: {
      borderRadiusLG: 8,
      radiusLG: 8,
    },
    Typography: {
      textColor: '#333333',
      textSecondaryColor: '#666666',
    },
  },
  cssVar: true,
  hashed: false,
};

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Router>
        <Header />
        <div style={{ minHeight: 'calc(100vh - 340px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ConfigProvider>
  );
}

export default App;