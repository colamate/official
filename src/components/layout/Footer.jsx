import React from 'react';
import { Layout, Typography, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        background: 'linear-gradient(135deg, #1677FF 0%, #597EF7 100%)',
        color: '#fff',
        padding: '60px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Row gutter={48} align="middle">
          <Col xs={24} md={8}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              ColaJS
            </Text>
          </Col>
          <Col xs={24} md={16}>
            <Space size={40} style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <Link
                to="https://colajs.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                官网
              </Link>
              <Link
                to="mailto:contact@colajs.com"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                联系我们
              </Link>
            </Space>
          </Col>
        </Row>

        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Text style={{ textAlign: 'center', opacity: 0.8, display: 'block' }}>
            © {new Date().getFullYear()} ColaJS. AI全栈开发 - AI一站式服务生态建设
          </Text>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;