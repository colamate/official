import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';

const FeatureCard = ({ icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
      }}
    >
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
        {icon}
      </Box>
      <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, flex: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;