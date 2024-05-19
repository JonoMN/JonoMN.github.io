import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, Button, Collapse } from "@mui/material";
import "../App.css";

import React, { useState, useEffect, useCallback } from "react";
import QUT from "../img/QUT-Logo.png";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import TimelineComponent from "../components/Timeline";
import { EducationCard } from "../components/EducationCard";
import { CreatedByFooter } from "../components/CreatedByFooter";

function Home() {

  const [readMore, setReadMore] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const range = 500;
    const offset = 700;
    const handleScroll = () => {
      let calc = 1 - (window.scrollY - offset + range) / range;
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }
      setOpacity(calc);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundTop = {
    opacity: opacity,
    height: "200vh",
  };

  return (
    <div className="gradient_background">
      <div style={backgroundTop}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000626",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#808080",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "30vh",
        }}
      >
        <Container
          sx={{
            height: "800px",
          }}
        >
          <Typography
            variant="h1"
            sx={{ typography: { xs: "h4", sm: "h3", md: "h2", lg: "h1" } }}
          >
            JONATHAN NELSON
          </Typography>
          <Typography
            variant="h3"
            sx={{ typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" } }}
            color="#FF3A20"
          >
            //Fullstack Developer
          </Typography>
        </Container>

        <Container
          sx={{ color: "white", width: { xs: "80%", lg: "60%" } }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>About Me</Typography>
          <Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        From the moment I powered on my first computer, I felt a spark.
        Software development is not just a profession to me; it's a
        calling. I'm inspired by the boundless potential it holds - the
        idea that a line of code today can reshape the world tomorrow. I
        don't just aim to create software; I strive to foster innovation
        and catalyze global productivity.
      </Typography>
      <Collapse in={readMore}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Armed with a degree in Computer Science, I have honed my skills to
          tackle the most challenging technical puzzles. During my computer
          science degree, I specialized in Full Stack development coming to
          a pinnacle with the successful development of a greenfield app for
          the financial consulting business, BUSINESSNAV.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          But my journey didn't stop there. My quest for growth led me to a
          Business Management degree, and it's here that I found the perfect
          marriage of tech and strategy. Drawing from this dual expertise,
          I've cultivated not just technical proficiency, but a broader
          vision that blends project management, client communication, and
          team synergy. It's this holistic perspective that lets me see
          beyond the code, understanding how technology intertwines with the
          pulse of business.
        </Typography>
      </Collapse>
      <Button
        variant="outlined"
        size="small"
        onClick={() => setReadMore(!readMore)}
        sx={{ color: "white", borderColor: "white" }}
      >
        {readMore ? 'Read Less' : 'Read More'}
      </Button>
    </Box>

          <Box sx={{ pt: 5 }}>
            <TimelineComponent />
          </Box>

          <Box sx={{ pt: 5 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>My Education</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <EducationCard degree="Bachelor IT" major="Major Computer Science" />
              </Grid>
              <Grid item xs={12} md={6}>
                <EducationCard degree="Bachelor Business" major="Major Management" />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              pt: 10,
              pb: 3,
              width: { xs: "100%", md: "60%" },
              margin: "auto",
            }}
          >
            <CreatedByFooter />
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Home;