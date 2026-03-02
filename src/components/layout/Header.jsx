import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '关于我们', path: '/about' },
    { name: '博客', path: '/blog' },
    { name: 'Demo', path: '/demo' },
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(102, 126, 234, 0.8)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '80px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '1.5rem',
            }}
          >
            ColaJS
          </Typography>
        </Box>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{ 
                  color: 'white', 
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#FFD700',
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}
        
        {isMobile && (
          <Button
            variant="contained"
            component={Link}
            to="/demo"
            sx={{ 
              background: 'white',
              color: '#2196F3',
              fontWeight: 600,
              '&:hover': {
                background: '#f0f0f0',
              }
            }}
          >
            Demo
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;