import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import UpdateIcon from '@mui/icons-material/Update';
import NewsIcon from '@mui/icons-material/Newspaper';

const Blog = () => {
  const theme = useTheme();
  
  const blogPosts = [
    {
      id: 1,
      title: 'AI全栈开发的未来趋势',
      excerpt: '探讨AI技术如何重塑软件开发流程，从需求分析到部署运维的全面智能化。',
      date: '2026-03-01',
      category: '技术趋势',
      icon: <ArticleIcon sx={{ fontSize: 32, color: '#2196F3' }} />
    },
    {
      id: 2,
      title: 'ColaJS 2.0 新特性发布',
      excerpt: '详细介绍ColaJS 2.0版本带来的全新功能，包括增强的代码生成能力和智能调试工具。',
      date: '2026-02-25',
      category: '产品更新',
      icon: <UpdateIcon sx={{ fontSize: 32, color: '#00BCD4' }} />
    },
    {
      id: 3,
      title: '如何构建高效的AI开发团队',
      excerpt: '分享在AI时代如何组建和管理高效的开发团队，提升整体研发效能。',
      date: '2026-02-20',
      category: '最佳实践',
      icon: <NewsIcon sx={{ fontSize: 32, color: '#FF6B6B' }} />
    },
    {
      id: 4,
      title: 'AI代码生成的质量保证',
      excerpt: '深入探讨AI生成代码的质量控制策略，确保生成代码的安全性和可靠性。',
      date: '2026-02-15',
      category: '技术深度',
      icon: <ArticleIcon sx={{ fontSize: 32, color: '#4CAF50' }} />
    }
  ];

  const categories = ['全部', '技术趋势', '产品更新', '最佳实践', '技术深度'];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ mb: 6, fontWeight: 600, color: theme.palette.text.primary }}
        >
          技术博客与新闻
        </Typography>
        
        {/* Category Filters */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === '全部' ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '20px',
                px: 3,
                fontWeight: 500,
                ...(category === '全部' && {
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                })
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
        
        {/* Blog Posts */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={6} key={post.id}>
              <Card sx={{ display: 'flex', height: '100%', p: 3 }}>
                <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
                  {post.icon}
                </Box>
                <CardContent sx={{ flex: 1, p: 0 }}>
                  <Typography variant="body2" sx={{ color: '#667eea', fontWeight: 600, mb: 1 }}>
                    {post.category}
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, opacity: 0.7 }}>
                    发布日期: {post.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Load More Button */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              borderColor: '#667eea',
              color: '#667eea',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }
            }}
          >
            加载更多文章
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;