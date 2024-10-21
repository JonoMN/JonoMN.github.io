import { CardActionArea } from "@mui/material";
import "../App.css";
import { Link } from "react-router-dom";


// MUI Card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState } from "react";

function Project({ title, topics, link, image, height }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <Card sx={{ display: "flex", height:height}}>
      <CardActionArea onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} component={Link} to={link}>
        <CardMedia component="img" image={image} alt={title}/>

        {isHovered ? (
          <Box
            className="navbar"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.8)",
              padding: "10px",
            }}
          >
            <Typography variant="h6" color="text.primary">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {topics}
            </Typography>
          </Box>
        ) : (
          <CardMedia />
        )}
      </CardActionArea>
    </Card>
  );
}

export default Project;
