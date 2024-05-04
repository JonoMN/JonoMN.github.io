import temp1 from "../img/BNAV MockUp.png";
import { CardActionArea } from "@mui/material";
import "../App.css";

// MUI Card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

function Project({ title, topics, desc, link, image }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <CardMedia component="img" image={image} />

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
          <CardMedia image={temp1} title="green iguana" />
        )}
      </CardActionArea>
    </Card>
  );
}

export default Project;
