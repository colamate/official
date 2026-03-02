import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BuildIcon from '@mui/icons-material/Build';
import Hero from '../components/common/Hero';
import FeatureCard from '../components/common/FeatureCard';

const Home = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: <CodeIcon sx={{ fontSize: 48, color: '#2196F3' }} />,
      title: 'AI代码生成',
      description: '智能生成高质量代码，支持多种编程语言和框架，大幅提升开发效率。'
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 48, color: '#00BCD4' }} />,
      title: '智能对话系统',
      description: '基于先进大模型的对话引擎，理解自然语言需求，提供精准技术解决方案。'
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 48, color: '#FF6B6B' }} />,
      title: 'API集成平台',
      description: '一站式API管理平台，轻松集成各种AI服务，构建完整应用生态。'
    },
    {
      icon: <BuildIcon sx={{ fontSize: 48, color: '#4CAF50' }} />,
      title: '全栈开发工具链',
      description: '从需求分析到部署运维，提供完整的AI辅助开发工具链，覆盖全生命周期。'
    }
  ];

  return (
    <Box>
      <Hero />
      
      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ mb: 6, fontWeight: 600, color: theme.palette.text.primary }}
          >
            核心功能
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <FeatureCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
            开启您的AI全栈开发之旅
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary }}>
            加入ColaJS生态系统，体验AI驱动的一站式开发服务
          </Typography>
          {/* CTA Button will be added when we have the actual demo link */}
        </Container>
      </Box>
    </Box>
  );
};

export default Home;