import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: 3,
            fontSize: { xs: '2.5rem', md: '4rem' },
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          AI全栈开发
        </Typography>
        
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 400, 
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2rem' },
            opacity: 0.9,
          }}
        >
          AI一站式服务生态建设
        </Typography>
        
        <Button
          component={Link}
          to="/demo"
          variant="contained"
          size="large"
          sx={{
            background: 'white',
            color: '#2196F3',
            fontWeight: 700,
            fontSize: '1.2rem',
            padding: '16px 48px',
            borderRadius: '50px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            '&:hover': {
              background: '#f0f0f0',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
            },
          }}
        >
          立即体验
        </Button>
      </Container>
      
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Hero;