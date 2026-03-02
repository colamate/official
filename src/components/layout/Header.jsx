import React from 'react';
import { Menu, Typography, Button, Dropdown } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '关于我们', path: '/about' },
    { name: '博客', path: '/blog' },
    { name: 'Demo', path: '/demo' },
  ];

  const mobileMenu = (
    <Menu
      selectedKeys={[location.pathname]}
      mode="vertical"
      items={navItems.map((item) => ({
        key: item.path,
        label: (
          <Link to={item.path} style={{ color: '#333' }}>
            {item.name}
          </Link>
        ),
      }))}
    />
  );

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1677FF 0%, #597EF7 100%)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                fontWeight: 700,
                margin: 0,
              }}
            >
              ColaJS
            </Text>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? '#FFD700' : '#fff',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#FFD700';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#fff';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div style={{ display: 'none', md: 'block' }}>
            <Button
              type="primary"
              style={{
                background: '#fff',
                color: '#1677FF',
                fontWeight: 600,
                borderRadius: 20,
                padding: '8px 32px',
              }}
              onClick={() => window.location.href = '/demo'}
            >
              立即体验
            </Button>
          </div>

          <div style={{ display: 'block', md: 'none' }}>
            <Dropdown menu={mobileMenu} trigger={['click']}>
              <Button icon={<MenuOutlined />} size="large" style={{ color: '#fff', border: 'none', background: 'transparent' }} />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;