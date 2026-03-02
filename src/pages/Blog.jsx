import React from 'react';

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

  const getCategoryStyle = (category) => {
    if (category === '技术趋势') return { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' };
    if (category === '产品更新') return { background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' };
    if (category === '最佳实践') return { background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' };
    return { background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' };
  };

  return (
    <div className="page-content">
      <h1 className="page-title">技术博客与新闻</h1>
      <p className="page-subtitle">
        获取最新的AI开发趋势、产品更新和最佳实践
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '10px 24px',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              border: 'none',
              background: activeCategory === category ? 'var(--primary-gradient)' : 'rgba(102, 126, 234, 0.1)',
              color: activeCategory === category ? '#fff' : '#666',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px' }}>
        {filteredPosts.map((post) => (
          <div key={post.id} className="feature-card" style={{ padding: '32px' }}>
            <span style={{
              ...getCategoryStyle(post.category),
              color: '#fff',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              display: 'inline-block',
            }}>
              {post.category}
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '16px 0', color: '#333' }}>
              {post.title}
            </h3>
            <p style={{ color: '#666', lineHeight: 1.8 }}>{post.excerpt}</p>
            <div style={{ marginTop: '16px', fontSize: '0.875rem', color: '#999' }}>
              发布日期: {post.date}
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px' }}>
          <p style={{ color: '#999' }}>暂无相关文章</p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button style={{
          padding: '12px 32px',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s',
          border: 'none',
          background: 'var(--primary-gradient)',
          color: '#fff',
        }}>
          加载更多文章
        </button>
      </div>
    </div>
  );
};

export default Blog;