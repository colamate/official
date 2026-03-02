import React from 'react';

const Products = () => {
  const products = [
    {
      icon: '💻',
      title: 'AI代码生成',
      description: '智能生成高质量代码，支持多种编程语言和框架，大幅提升开发效率。通过自然语言描述需求，自动生成完整功能代码。',
      features: ['多语言支持', '智能上下文理解', '代码优化建议', '实时错误检测'],
    },
    {
      icon: '💬',
      title: '智能对话系统',
      description: '基于先进大模型的对话引擎，理解自然语言需求，提供精准技术解决方案。支持多轮对话，上下文记忆，专业领域知识。',
      features: ['自然语言理解', '多轮对话', '上下文记忆', '专业知识库'],
    },
    {
      icon: '🔗',
      title: 'API集成平台',
      description: '一站式API管理平台，轻松集成各种AI服务，构建完整应用生态。提供统一的API网关，监控和管理所有服务调用。',
      features: ['统一API网关', '实时监控', '流量控制', '安全认证'],
    },
    {
      icon: '🚀',
      title: '全栈开发工具链',
      description: '从需求分析到部署运维，提供完整的AI辅助开发工具链，覆盖全生命周期。自动化测试、部署和监控，让开发更高效。',
      features: ['自动化测试', 'CI/CD集成', '性能监控', '错误追踪'],
    },
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">产品矩阵</h1>
      <p className="page-subtitle">
        全方位AI辅助开发工具，覆盖软件开发生命周期的每一个环节
      </p>

      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-desc">{product.description}</p>
            <div className="feature-tags">
              {product.features.map((feature, idx) => (
                <span key={idx} className="feature-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;