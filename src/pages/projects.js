import { Container } from "@mui/system";
import "../App.css";
import Project from "../components/Project";

import React from "react";

// MUI Grid
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from "@mui/material";

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
  ];

  let componentsArr = [];
  for (let i = 0; i < projects.length; i++) {
    componentsArr.push(
      <Grid xs={12} md={6} xl={4} sx={{ p: 2 }}>
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
        backgroundColor: "#000626",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <Container style={{ color: "white", paddingTop: "10vh" }}>
        <Typography variant="h4">/ PROJECTS</Typography>
        <Grid container>{componentsArr}</Grid>
      </Container>
    </div>
  );
}

export default Projects;
