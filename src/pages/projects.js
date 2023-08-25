import { Container } from "@mui/system";
import "../App.css";
import Project from "../components/Project";

import React from "react";

// MUI Grid
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function Projects() {
  let projects = [
    {
      Name: "Peak Performance App (QUT CAPSTONE Project)",
      Topics: "React Native • AWS • Node",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia nec augue ac aliquam.",
      Link: "",
      Image: require("../img/BNAV MockUp.png"),
    },
    {
      Name: "Finance Tracker (Up API)",
      Topics: "React •  • Node",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia nec augue ac aliquam.",
      Link: "",
      Image: require("../img/FinanceTracker.png"),
    },
    {
      Name: "Event Ticketing System",
      Topics: "Bootstrap • Flask • MySQL",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia nec augue ac aliquam.",
      Link: "",
      Image: require("../img/BNAV MockUp.png"),
    },
  ];

  let componentsArr = [];
  for (let i = 0; i < projects.length; i++) {
    componentsArr.push(
      <Grid xs={6} sx={{ p: 2 }}>
        <Project
          title={projects[i].Name}
          topics={projects[i].Topics}
          desc={projects[i].Desc}
          link={projects[i].Link}
          image={projects[i].Image}
        />
      </Grid>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#121212",
      }}
    >
      <Container
        className="aboutMe"
        style={{ color: "white", textAlign: "justify", paddingTop: "8vh" }}
      >
        <h1>/projects</h1>
        <Grid container>{componentsArr}</Grid>
      </Container>
    </div>
  );
}

export default Projects;
