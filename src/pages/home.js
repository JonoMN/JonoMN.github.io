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

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Paper from "@mui/material/Paper";
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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "0vh",
        backgroundColor: "#121212",
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
                value: "#121212",
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
          {/* <Card
            style={{ background: "rgba(30, 30, 30, 0.9)" }}
            sx={{ p: 2, width: "75%" }}
          > */}
          <Typography variant="h1">JONATHAN NELSON</Typography>
          <Typography variant="h3" color="text.secondary">
            //Aspiring Fullstack Developer
          </Typography>
          {/* </Card> */}
        </Container>
        <Container
          style={{ color: "white", textAlign: "justify" }}
          sx={{ width: "50%", margin: "auto" }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h1>About Me</h1>
              <Item>
                <p>
                  Software development has been a passion of mine since I bought
                  my first computer, it motivates me to know that my work will
                  one day drive innovation and productivity in the world. In
                  conjunction with my love for computers, I have always been
                  hungry for self-growth in all aspects of my life. I am eager
                  to gain access to opportunities that will improve my teamwork,
                  leadership and problem-solving.
                </p>
                <p>
                  My Computer Science degree has strongly prepared me for the
                  technical challenges I will face in any role. During my
                  computer science degree, I specialised in Full Stack
                  development coming to a pinnacle with the successful
                  development of a greenfield app for the financial consulting
                  business, BUSINESSNAV.
                </p>
                <p>
                  Beyond technical skills, my extra value comes from my Business
                  Management degree and the lessons I have learnt from working
                  in previous teams. My business degree and previous experience
                  have enhanced my project management, client communication,
                  team collaboration and innovation skills while also giving me
                  a greater understanding of general business operations.
                </p>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <h1>My Experience</h1>
              <Item>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      Jun 2016 - May 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        Team Member
                      </Typography>
                      <Typography>Woolworths</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      May 2021 - Sep 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        Software & Systems Developer
                      </Typography>
                      <Typography>Mecha</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      Sep 2021 - Sep 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        Corporate Events Director
                      </Typography>
                      <Typography>BAMSA</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      Sep 2022 - Sep 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        President
                      </Typography>
                      <Typography>BAMSA</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      Oct 2022 - Current
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        IT Officer
                      </Typography>
                      <Typography>ACRRM</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      Future
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        #1 Fullstack Developer
                      </Typography>
                      <Typography>Earth</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Item>
            </Grid>
            <Box>
              <h1>My Education</h1>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={QUT}
                        alt="QUT Logo"
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent>
                          <Typography variant="h5">
                            Bachelor Business
                          </Typography>
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
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
