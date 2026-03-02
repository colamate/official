import React from 'react';
import { Typography, Grid, Card, Divider, Space, Tag, Button } from 'antd';
import { CodeOutlined, RocketOutlined, ApiOutlined, BuildOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Products = () => {
  const products = [
    {
      icon: <CodeOutlined style={{ fontSize: 64, color: '#1677FF' }} />,
      title: 'AI代码生成',
      description: '智能生成高质量代码，支持多种编程语言和框架，大幅提升开发效率。通过自然语言描述需求，自动生成完整功能代码。',
      features: ['多语言支持', '智能上下文理解', '代码优化建议', '实时错误检测'],
    },
    {
      icon: <RocketOutlined style={{ fontSize: 64, color: '#13C2C2' }} />,
      title: '智能对话系统',
      description: '基于先进大模型的对话引擎，理解自然语言需求，提供精准技术解决方案。支持多轮对话，上下文记忆，专业领域知识。',
      features: ['自然语言理解', '多轮对话', '上下文记忆', '专业知识库'],
    },
    {
      icon: <ApiOutlined style={{ fontSize: 64, color: '#FA8C16' }} />,
      title: 'API集成平台',
      description: '一站式API管理平台，轻松集成各种AI服务，构建完整应用生态。提供统一的API网关，监控和管理所有服务调用。',
      features: ['统一API网关', '实时监控', '流量控制', '安全认证'],
    },
    {
      icon: <BuildOutlined style={{ fontSize: 64, color: '#52C41A' }} />,
      title: '全栈开发工具链',
      description: '从需求分析到部署运维，提供完整的AI辅助开发工具链，覆盖全生命周期。自动化测试、部署和监控，让开发更高效。',
      features: ['自动化测试', 'CI/CD集成', '性能监控', '错误追踪'],
    },
  ];

  return (
    <div style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title
          style={{
            marginBottom: 48,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          产品矩阵
        </Title>

        <Space size={32} wrap justify="center">
          {products.map((product, index) => (
            <Card
              key={index}
              style={{
                width: '100%',
                maxWidth: 720,
                border: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
              bodyStyle={{ padding: '32px 24px' }}
            >
              <Space align="start" size={32}>
                {product.icon}
                <div style={{ flex: 1 }}>
                  <Title
                    level={3}
                    style={{
                      fontWeight: 600,
                      marginBottom: 16,
                      color: 'rgba(0, 0, 0, 0.85)',
                    }}
                  >
                    {product.title}
                  </Title>
                  <Text style={{ display: 'block', marginBottom: 24, color: '#666666', lineHeight: 1.8 }}>
                    {product.description}
                  </Text>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {product.features.map((feature, idx) => (
                      <Tag
                        key={idx}
                        style={{
                          background: 'linear-gradient(135deg, #1677FF 0%, #597EF7 100%)',
                          color: '#fff',
                          border: 'none',
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Space>
            </Card>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Products;