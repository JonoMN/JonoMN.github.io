import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';

interface TLDRProps {
  children: ReactNode;
}

function TLDR({ children }: TLDRProps): JSX.Element {
  return (
    <Box sx={{ mb: 3 }}>
      <Card
        sx={{
          display: 'flex',
          background: 'rgba(255, 255, 255, .10)',
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="body1" component="div" sx={{ width: '100%', margin: 'auto' }}>
          <b>TL;DR</b>
          <br />
          {children}
        </Typography>
      </Card>
    </Box>
  );
}

export default TLDR;
