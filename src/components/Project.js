import temp1 from "../img/BNAV MockUp.png";
import { CardActionArea } from "@mui/material";

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

function Project() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <Grid container spacing={4}>
      <Grid xs={6}>
        <Card sx={{ display: "flex" }}>
          <CardActionArea
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <CardMedia
              component="img"
              image={temp1}
              alt="Live from space album cover"
            />

            {isHovered ? (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <Typography variant="h6" color="text.primary">
                  Peak Performance App (QUT CAPSTONE Project)
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  React Native • AWS • Node
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus lacinia nec augue ac aliquam.
                </Typography>
              </Box>
            ) : (
              <CardMedia image={temp1} title="green iguana" />
            )}
          </CardActionArea>
        </Card>
      </Grid>

      <Grid xs={6}>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={temp1}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Project;
