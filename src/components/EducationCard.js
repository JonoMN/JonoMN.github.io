import React from "react";
import QUTLogo from "../img/QUT-Logo.png";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import "../App.css";
import Box from "@mui/material/Box";

export function EducationCard() {
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          background: "rgba(255, 255, 255, .10)",
        }}
      >
        <Box
          sx={{
            width: { xs: 80, md: 100 },
            display: "flex", // Using flexbox to center the image
            alignItems: "center", // Vertically center
            justifyContent: "center", // Horizontally center
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain", // Ensure image retains its aspect ratio and does not stretch
            }}
            image={QUTLogo}
            alt="QUT Logo"
          />
        </Box>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            p: { xs: 0.4, md: 1 },
            pl: { xs: 1, md: 1 },
          }}
        >
          <Typography variant="h6">Bachelor IT</Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            Major Computer Science
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
