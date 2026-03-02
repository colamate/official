import React from 'react';

const About = () => {
  const aboutSections = [
    {
      icon: '🎯',
      title: '我们的使命',
      content: '推动AI技术在软件开发领域的深度应用，让每个开发者都能享受到AI带来的效率提升。我们致力于构建一个开放、创新、高效的AI全栈开发生态系统。',
    },
    {
      icon: '🌟',
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
    <div className="page-content">
      <h1 className="page-title">关于我们</h1>
      <p className="page-subtitle">
        了解我们的使命、愿景和发展历程
      </p>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
        {aboutSections.map((section, index) => (
          <div key={index} className="about-card" style={{ marginBottom: '0' }}>
            <div className="about-icon">{section.icon}</div>
            <h3 className="about-title">{section.title}</h3>
            <p className="about-text">{section.content}</p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', marginBottom: '48px', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        发展历程
      </h2>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {timelineItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '32px', alignItems: 'center' }}>
            <div style={{ width: '120px', textAlign: 'center', marginRight: '32px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {item.year}
              </div>
              {index < timelineItems.length - 1 && (
                <div style={{ width: '2px', height: '50px', background: 'linear-gradient(to bottom, #667eea, #764ba2)', margin: '8px auto 0' }} />
              )}
            </div>
            <div style={{ flex: 1, padding: '16px 24px', background: 'rgba(102, 126, 234, 0.05)', borderRadius: '16px' }}>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.8 }}>{item.event}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <div style={{ padding: '64px 32px', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)', borderRadius: '24px' }}>
          <div style={{ fontSize: '80px', marginBottom: '32px' }}>📧</div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px' }}>联系我们</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '8px' }}>邮箱: contact@colajs.com</p>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>地址: 中国·深圳·南山科技园</p>
        </div>
      </div>
    </div>
  );
};

export default About;