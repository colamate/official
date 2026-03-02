import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BuildIcon from '@mui/icons-material/Build';

const Products = () => {
  const theme = useTheme();
  
  const products = [
    {
      icon: <CodeIcon sx={{ fontSize: 64, color: '#2196F3' }} />,
      title: 'AI代码生成',
      description: '智能生成高质量代码，支持多种编程语言和框架，大幅提升开发效率。通过自然语言描述需求，自动生成完整功能代码。',
      features: ['多语言支持', '智能上下文理解', '代码优化建议', '实时错误检测']
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 64, color: '#00BCD4' }} />,
      title: '智能对话系统',
      description: '基于先进大模型的对话引擎，理解自然语言需求，提供精准技术解决方案。支持多轮对话，上下文记忆，专业领域知识。',
      features: ['自然语言理解', '多轮对话', '上下文记忆', '专业知识库']
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 64, color: '#FF6B6B' }} />,
      title: 'API集成平台',
      description: '一站式API管理平台，轻松集成各种AI服务，构建完整应用生态。提供统一的API网关，监控和管理所有服务调用。',
      features: ['统一API网关', '实时监控', '流量控制', '安全认证']
    },
    {
      icon: <BuildIcon sx={{ fontSize: 64, color: '#4CAF50' }} />,
      title: '全栈开发工具链',
      description: '从需求分析到部署运维，提供完整的AI辅助开发工具链，覆盖全生命周期。自动化测试、部署和监控，让开发更高效。',
      features: ['自动化测试', 'CI/CD集成', '性能监控', '错误追踪']
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ mb: 6, fontWeight: 600, color: theme.palette.text.primary }}
        >
          产品矩阵
        </Typography>
        
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ display: 'flex', height: '100%', p: 3 }}>
                <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
                  {product.icon}
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {product.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          px: 2,
                          py: 1,
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;