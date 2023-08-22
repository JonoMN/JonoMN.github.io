import { Container } from "@mui/system";
import "../App.css";

import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import background from "../img/BG-Test1.jpg";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { loadSlim } from "tsparticles-slim";

import Particles from "react-particles";
import { useCallback } from "react";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
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
    backgroundImage: `url(${background})`,
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
                  enable: true,
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
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
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
            height: "1000px",
          }}
        >
          <Card mt="3" style={{ width: "50%" }}>
            <Typography variant="h1">Jonathan Nelson</Typography>
          </Card>
        </Container>
        <Container style={{ color: "white", textAlign: "justify" }}>
          <h1>About Me</h1>
          <Grid container spacing={4}>
            <Grid item xs={7}>
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
            <Grid item xs={5}>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;