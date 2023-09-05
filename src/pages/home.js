import { Container } from "@mui/system";
import "../App.css";

import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import QUT from "../img/QUT-Logo.png";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { loadSlim } from "tsparticles-slim";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TimelineComponent from "../components/Timeline";

import Box from "@mui/material/Box";

import Particles from "react-particles";
import { useCallback } from "react";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [opacity, setOpacity] = React.useState(1);
  React.useEffect(() => {
    const range = 500;
    const offset = 700;
    const didScrollPage = (e) => {
      let calc = 1 - (window.scrollY - offset + range) / range;
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }
      setOpacity(calc);
    };
    window.addEventListener("scroll", didScrollPage);
    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  const backgroundTop = {
    opacity: opacity,
    height: "200vh",
  };

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "0vh",
        backgroundColor: "#000626",
      }}
    >
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
      <div style={{ width: "100%", position: "absolute", top: "30vh" }}>
        <Container
          style={{
            height: "800px",
          }}
        >
          <Typography variant="h1">JONATHAN NELSON</Typography>
          <Typography variant="h3" color="text.secondary">
            //Aspiring Fullstack Developer
          </Typography>
        </Container>
        <Container
          style={{ color: "white", textAlign: "justify" }}
          sx={{ width: "50%", margin: "auto" }}
        >
          <h1>About Me</h1>
          <Item>
            <p>
              Software development has been a passion of mine since I bought my
              first computer, it motivates me to know that my work will one day
              drive innovation and productivity in the world. In conjunction
              with my love for computers, I have always been hungry for
              self-growth in all aspects of my life. I am eager to gain access
              to opportunities that will improve my teamwork, leadership and
              problem-solving.
            </p>
            <p>
              My Computer Science degree has strongly prepared me for the
              technical challenges I will face in any role. During my computer
              science degree, I specialised in Full Stack development coming to
              a pinnacle with the successful development of a greenfield app for
              the financial consulting business, BUSINESSNAV.
            </p>
            <p>
              Beyond technical skills, my extra value comes from my Business
              Management degree and the lessons I have learnt from working in
              previous teams. My business degree and previous experience have
              enhanced my project management, client communication, team
              collaboration and innovation skills while also giving me a greater
              understanding of general business operations.
            </p>
          </Item>

          <h1>My Experience</h1>
          <TimelineComponent />

          <Box>
            <h1>My Education</h1>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={QUT}
                      alt="QUT Logo"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent>
                        <Typography variant="h5">Bachelor IT</Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Major Computer Science
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={QUT}
                      alt="QUT Logo"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent>
                        <Typography variant="h5">Bachelor Business</Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Major Management
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Item>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Home;
