import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: { xs: 2, md: 0 } }}>
            ColaJS
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Link 
              href="https://colajs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: 'white', 
                textDecoration: 'none',
                '&:hover': { color: '#FFD700' }
              }}
            >
              官网
            </Link>
            <Link 
              href="mailto:contact@colajs.com" 
              sx={{ 
                color: 'white', 
                textDecoration: 'none',
                '&:hover': { color: '#FFD700' }
              }}
            >
              联系我们
            </Link>
          </Box>
        </Box>
        
        <Box sx={{ mt: 4, borderTop: '1px solid rgba(255,255,255,0.2)', pt: 2 }}>
          <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8 }}>
            © {new Date().getFullYear()} ColaJS. AI全栈开发 - AI一站式服务生态建设
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;