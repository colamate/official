import React from 'react';
import { Layout, Typography, Grid, Card, Space } from 'antd';
import { CodeOutlined, RocketOutlined, ApiOutlined, BuildOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Home = () => {
  const screens = useBreakpoint();

  const features = [
    {
      icon: <CodeOutlined style={{ fontSize: 48, color: '#1677FF' }} />,
      title: 'AI代码生成',
      description: '智能生成高质量代码，支持多种编程语言和框架，大幅提升开发效率。',
    },
    {
      icon: <RocketOutlined style={{ fontSize: 48, color: '#13C2C2' }} />,
      title: '智能对话系统',
      description: '基于先进大模型的对话引擎，理解自然语言需求，提供精准技术解决方案。',
    },
    {
      icon: <ApiOutlined style={{ fontSize: 48, color: '#FA8C16' }} />,
      title: 'API集成平台',
      description: '一站式API管理平台，轻松集成各种AI服务，构建完整应用生态。',
    },
    {
      icon: <BuildOutlined style={{ fontSize: 48, color: '#52C41A' }} />,
      title: '全栈开发工具链',
      description: '从需求分析到部署运维，提供完整的AI辅助开发工具链，覆盖全生命周期。',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1677FF 0%, #597EF7 100%)',
          color: '#fff',
          padding: screens.md ? '120px 0' : '80px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Title
            style={{
              fontWeight: 700,
              marginBottom: 24,
              fontSize: screens.md ? '48px' : '32px',
            }}
          >
            AI全栈开发
          </Title>

          <Text
            style={{
              fontSize: screens.md ? '24px' : '18px',
              opacity: 0.9,
              marginBottom: 40,
              display: 'block',
            }}
          >
            AI一站式服务生态建设
          </Text>

          <a href="/demo">
            <button
              style={{
                background: '#fff',
                color: '#1677FF',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 48px',
                borderRadius: 50,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
              }}
            >
              立即体验
            </button>
          </a>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 40%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Features Section */}
      <div style={{ padding: '80px 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Title
            style={{
              marginBottom: 48,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            核心功能
          </Title>

          <Space size={32} wrap justify="center">
            {features.map((feature, index) => (
              <Card
                key={index}
                style={{
                  width: screens.md ? '280px' : '100%',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
                bodyStyle={{ padding: '32px 24px' }}
              >
                <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <Title level={3} style={{ fontWeight: 600, marginBottom: 16, color: '#1677FF' }}>
                  {feature.title}
                </Title>
                <Text style={{ color: '#666666' }}>{feature.description}</Text>
              </Card>
            ))}
          </Space>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #F5F7FA 0%, #E4EDF5 100%)',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Title
            style={{
              fontWeight: 600,
              marginBottom: 24,
              fontSize: screens.md ? '32px' : '24px',
            }}
          >
            开启您的AI全栈开发之旅
          </Title>
          <Text
            style={{
              display: 'block',
              marginBottom: 32,
              color: '#666666',
            }}
          >
            加入ColaJS生态系统，体验AI驱动的一站式开发服务
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Home;