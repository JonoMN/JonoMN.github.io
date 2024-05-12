import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import QUTLogo from '../img/QUT-Logo.png';

export function EducationCard(props) {
  return (
    <Card sx={{ display: 'flex', background: 'rgba(255, 255, 255, 0.10)' }}>
      <Box sx={{ width: { xs: 80, md: 100 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          image={QUTLogo}
          alt="QUT Logo"
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: { xs: 1, md: 1.5 } }}>
        <Typography variant="h6">{props.degree}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.major}
        </Typography>
      </CardContent>
    </Card>
  );
}