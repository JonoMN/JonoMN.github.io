import { Container } from "@mui/system";
import "../App.css";

import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import background from "../img/BG-Test1.jpg";

function Home() {
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
      <div style={backgroundTop}></div>
      <div style={{ width: "100%", position: "absolute", top: "0vh" }}>
        <Container
          style={{
            color: "white",
            fontSize: "4vw",
            height: "1000px",
            top: "2000px",
          }}
        >
          <h1>Jonathan Nelson</h1>
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
