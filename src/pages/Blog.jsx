import React from 'react';
import { Typography, Card, Tag, Button, Row, Col, Space, Divider } from 'antd';

const { Title, Text } = Typography;

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('全部');

  const categories = ['全部', '技术趋势', '产品更新', '最佳实践', '技术深度'];

  const blogPosts = [
    {
      id: 1,
      title: 'AI全栈开发的未来趋势',
      excerpt: '探讨AI技术如何重塑软件开发流程，从需求分析到部署运维的全面智能化。',
      date: '2026-03-01',
      category: '技术趋势',
    },
    {
      id: 2,
      title: 'ColaJS 2.0 新特性发布',
      excerpt: '详细介绍ColaJS 2.0版本带来的全新功能，包括增强的代码生成能力和智能调试工具。',
      date: '2026-02-25',
      category: '产品更新',
    },
    {
      id: 3,
      title: '如何构建高效的AI开发团队',
      excerpt: '分享在AI时代如何组建和管理高效的开发团队，提升整体研发效能。',
      date: '2026-02-20',
      category: '最佳实践',
    },
    {
      id: 4,
      title: 'AI代码生成的质量保证',
      excerpt: '深入探讨AI生成代码的质量控制策略，确保生成代码的安全性和可靠性。',
      date: '2026-02-15',
      category: '技术深度',
    },
  ];

  const filteredPosts = activeCategory === '全部' 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === activeCategory);

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
          技术博客与新闻
        </Title>

        <div
          style={{
            marginBottom: 48,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              type={activeCategory === '全部' && index === 0 ? 'primary' : 'default'}
              style={{
                borderRadius: 20,
                paddingHorizontal: 24,
                fontWeight: 500,
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <Row gutter={32}>
          {filteredPosts.map((post) => (
            <Col xs={24} md={12} lg={12} key={post.id}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <Space align="start">
                  <Tag
                    color={
                      post.category === '技术趋势'
                        ? '#1677FF'
                        : post.category === '产品更新'
                        ? '#13C2C2'
                        : post.category === '最佳实践'
                        ? '#FA8C16'
                        : '#52C41A'
                    }
                    style={{
                      fontWeight: 600,
                      borderRadius: 4,
                      padding: '4px 12px',
                    }}
                  >
                    {post.category}
                  </Tag>
                </Space>
                <Title
                  level={3}
                  style={{
                    fontWeight: 600,
                    marginBottom: 12,
                    color: 'rgba(0, 0, 0, 0.85)',
                  }}
                >
                  {post.title}
                </Title>
                <Text
                  style={{
                    display: 'block',
                    marginBottom: 16,
                    color: '#666666',
                  }}
                >
                  {post.excerpt}
                </Text>
                <Text
                  type="secondary"
                  style={{ fontSize: 12 }}
                >
                  发布日期: {post.date}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: 48 }}>
            <Text type="secondary">暂无相关文章</Text>
          </div>
        )}

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <Button
            type="default"
            style={{
              borderRadius: 50,
              paddingHorizontal: 32,
              paddingVertical: 12,
              borderColor: '#1677FF',
              color: '#1677FF',
              fontWeight: 600,
            }}
          >
            加载更多文章
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;