import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import AIChatDemo from '../components/demo/AIChatDemo';

const Demo = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ mb: 6, fontWeight: 600, color: theme.palette.text.primary }}
        >
          功能演示
        </Typography>
        
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ mb: 8, color: theme.palette.text.secondary, maxWidth: '600px', mx: 'auto' }}
        >
          体验ColaJS的AI全栈开发能力，包括智能代码生成、对话系统和API集成等功能。
        </Typography>
        
        <AIChatDemo />
      </Container>
    </Box>
  );
};

export default Demo;