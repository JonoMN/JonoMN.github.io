import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import QUTLogo from '../img/QUT-Logo.png';
import { EducationCardProps } from '../types';

export function EducationCard({ degree, major, link }: EducationCardProps): JSX.Element {
  const cardContent = (
    <>
      <Box sx={{ width: { xs: 85, md: 100 }, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          image={QUTLogo}
          alt="QUT Logo"
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: { xs: 1, md: 1.5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
        <Typography variant="h6" sx={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{degree}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          {major}
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Card sx={{ display: 'flex', background: 'rgba(255, 255, 255, 0.10)', height: '100%', width: '100%', minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
      {link ? (
        <CardActionArea
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'flex', height: '100%', width: '100%', alignItems: 'stretch' }}
        >
          {cardContent}
        </CardActionArea>
      ) : (
        cardContent
      )}
    </Card>
  );
}
