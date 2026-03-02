import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '💻',
      title: 'AI代码生成',
      description: '智能生成高质量代码，支持多种编程语言和框架，大幅提升开发效率。',
    },
    {
      icon: '💬',
      title: '智能对话系统',
      description: '基于先进大模型的对话引擎，理解自然语言需求，提供精准技术解决方案。',
    },
    {
      icon: '🔗',
      title: 'API集成平台',
      description: '一站式API管理平台，轻松集成各种AI服务，构建完整应用生态。',
    },
    {
      icon: '🚀',
      title: '全栈开发工具链',
      description: '从需求分析到部署运维，提供完整的AI辅助开发工具链，覆盖全生命周期。',
    },
  ];

  const aboutSections = [
    {
      icon: '🎯',
      title: '我们的使命',
      text: '推动AI技术在软件开发领域的深度应用，让每个开发者都能享受到AI带来的效率提升。我们致力于构建一个开放、创新、高效的AI全栈开发生态系统。',
    },
    {
      icon: '🌟',
      title: '我们的愿景',
      text: '成为全球领先的AI全栈开发平台，通过技术创新和生态建设，降低AI应用门槛，赋能开发者创造更多价值，推动整个软件行业的智能化转型。',
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AI全栈开发</h1>
          <p className="hero-subtitle">
            AI一站式服务生态建设<br />
            开启您的智能开发之旅
          </p>
          <Link to="/demo" className="btn-primary">
            立即体验
          </Link>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-container">
          <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }}>
            核心功能
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '64px' }}>
            全方位AI辅助开发工具，覆盖软件开发生命周期的每一个环节
          </p>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon float-anim">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '800', marginBottom: '48px', color: '#fff' }}>
            关于我们
          </h2>

          <div className="about-grid">
            {aboutSections.map((section, index) => (
              <div key={index} className="about-card">
                <div className="about-icon">{section.icon}</div>
                <h3 className="about-title">{section.title}</h3>
                <p className="about-text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">开启您的AI全栈开发之旅</h2>
          <p className="cta-desc">加入ColaJS生态系统，体验AI驱动的一站式开发服务</p>
          <Link to="/demo" className="btn-primary">
            立即体验
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;