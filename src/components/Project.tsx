import { useState } from 'react';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from '../types';
import '../App.css';

function Project({ title, topics, link, image, height }: ProjectCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseOut = (): void => {
    setIsHovered(false);
  };

  const cardContent = (
    <>
      <CardMedia 
        component="img" 
        image={image} 
        alt={title}
        sx={{ 
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {isHovered && (
        <Box
          className="navbar"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
          }}
        >
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {topics}
          </Typography>
        </Box>
      )}
    </>
  );

  return (
    <Card sx={{ display: 'flex', height: height || '250px', width: '100%', position: 'relative' }}>
      {link ? (
        <CardActionArea
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          component={Link}
          to={link}
          sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}
        >
          {cardContent}
        </CardActionArea>
      ) : (
        <Box
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'default' }}
        >
          {cardContent}
        </Box>
      )}
    </Card>
  );
}

export default Project;
