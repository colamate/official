import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimelineIcon from '@mui/icons-material/Timeline';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const About = () => {
  const theme = useTheme();
  
  const sections = [
    {
      icon: <PeopleIcon sx={{ fontSize: 48, color: '#2196F3' }} />,
      title: '我们的使命',
      content: '推动AI技术在软件开发领域的深度应用，让每个开发者都能享受到AI带来的效率提升。我们致力于构建一个开放、创新、高效的AI全栈开发生态系统。'
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 48, color: '#00BCD4' }} />,
      title: '我们的愿景',
      content: '成为全球领先的AI全栈开发平台，通过技术创新和生态建设，降低AI应用门槛，赋能开发者创造更多价值，推动整个软件行业的智能化转型。'
    }
  ];

  const timeline = [
    { year: '2024', event: 'ColaJS项目启动，开始AI全栈开发平台研发' },
    { year: '2025', event: '发布首个Beta版本，支持基础代码生成和对话功能' },
    { year: '2026', event: '推出完整版AI一站式服务生态，支持企业级应用' },
    { year: '未来', event: '持续扩展AI能力，构建全球最大的AI开发者社区' }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ mb: 6, fontWeight: 600, color: theme.palette.text.primary }}
        >
          关于我们
        </Typography>
        
        {/* Mission and Vision */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ textAlign: 'center', p: 4, height: '100%' }}>
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                  {section.icon}
                </Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {section.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            发展历程
          </Typography>
          <Grid container spacing={3}>
            {timeline.map((item, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <TimelineIcon sx={{ fontSize: 32, color: '#667eea', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#667eea' }}>
                    {item.year}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {item.event}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Contact */}
        <Box sx={{ textAlign: 'center' }}>
          <Card sx={{ p: 6 }}>
            <ContactMailIcon sx={{ fontSize: 64, color: '#FF6B6B', mb: 3 }} />
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              联系我们
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary }}>
              邮箱: contact@colajs.com
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              地址: 中国·深圳·南山科技园
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default About;