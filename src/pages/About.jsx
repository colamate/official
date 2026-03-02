import React from 'react';
import { Typography, Grid, Card, Timeline, Space, Row, Col } from 'antd';
import { TeamOutlined, BulbOutlined, ClockCircleOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const About = () => {
  const sections = [
    {
      icon: <TeamOutlined style={{ fontSize: 48, color: '#1677FF' }} />,
      title: '我们的使命',
      content: '推动AI技术在软件开发领域的深度应用，让每个开发者都能享受到AI带来的效率提升。我们致力于构建一个开放、创新、高效的AI全栈开发生态系统。',
    },
    {
      icon: <BulbOutlined style={{ fontSize: 48, color: '#13C2C2' }} />,
      title: '我们的愿景',
      content: '成为全球领先的AI全栈开发平台，通过技术创新和生态建设，降低AI应用门槛，赋能开发者创造更多价值，推动整个软件行业的智能化转型。',
    },
  ];

  const timelineItems = [
    { year: '2024', event: 'ColaJS项目启动，开始AI全栈开发平台研发' },
    { year: '2025', event: '发布首个Beta版本，支持基础代码生成和对话功能' },
    { year: '2026', event: '推出完整版AI一站式服务生态，支持企业级应用' },
    { year: '未来', event: '持续扩展AI能力，构建全球最大的AI开发者社区' },
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
          关于我们
        </Title>

        <div style={{ marginBottom: 48 }}>
          <Row gutter={32}>
            {sections.map((section, index) => (
              <Col xs={24} md={12} key={index}>
                <Card
                  style={{
                    textAlign: 'center',
                    height: '100%',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  }}
                  bodyStyle={{ padding: '32px 24px' }}
                >
                  <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                    {section.icon}
                  </div>
                  <Title
                    level={3}
                    style={{
                      fontWeight: 600,
                      marginBottom: 16,
                      color: 'rgba(0, 0, 0, 0.85)',
                    }}
                  >
                    {section.title}
                  </Title>
                  <Text style={{ color: '#666666', lineHeight: 1.8 }}>
                    {section.content}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: 48 }}>
          <Title
            style={{
              marginBottom: 32,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            发展历程
          </Title>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Timeline
              items={timelineItems.map((item, index) => ({
                children: (
                  <div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: '#1677FF',
                        marginBottom: 8,
                      }}
                    >
                      {item.year}
                    </div>
                    <Text style={{ color: '#666666' }}>{item.event}</Text>
                  </div>
                ),
                dot: <ClockCircleOutlined style={{ fontSize: '16px', color: '#1677FF' }} />,
              }))}
            />
          </div>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center' }}>
          <Card
            style={{
              padding: '40px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
            bodyStyle={{ padding: '0' }}
          >
            <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
              <MailOutlined
                style={{ fontSize: 64, color: '#FA8C16' }}
              />
            </div>
            <Title
              level={3}
              style={{
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              联系我们
            </Title>
            <Text
              style={{
                display: 'block',
                marginBottom: 8,
                color: 'rgba(0, 0, 0, 0.65)',
              }}
            >
              邮箱: contact@colajs.com
            </Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
              地址: 中国·深圳·南山科技园
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;