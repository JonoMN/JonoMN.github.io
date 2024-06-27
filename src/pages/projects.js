import { Container } from "@mui/system";
import "../App.css";
import Project from "../components/Project";

import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Projects() {
  let projects = [
    {
      Name: "Peak Performance App (QUT Capstone)",
      Topics: "React Native • Node.js • Agile Methodologies • Testing Practices • System Architecture Design",
      Link: "/projects/peak-performance",
      Image: require("../img/BNAV MockUp.png"),
    },
    {
      Name: "Live Finance Tracker",
      Topics: "React • Typescript • Figma • Axios",
      Link: "/projects/finance-tracker",
      Image: require("../img/FinanceTracker.png"),
    },
    {
      Name: "Happy Hour Finder",
      Topics: "React (Next) • Node.js (Express) • AWS Lighsail • Postgres • Swagger",
      Link: "",
      Image: require("../img/Construction.png"),
    },
  ];

  let componentsArr = [];
  for (let i = 0; i < projects.length; i++) {
    componentsArr.push(
      <Grid xs={12} md={6} xl={4} sx={{ p: 2 }}>
        <Project
          title={projects[i].Name}
          topics={projects[i].Topics}
          link={projects[i].Link}
          image={projects[i].Image}
          height="100%"
        />
      </Grid>
    );
  }

  return (
      <Container>
        <Typography variant="h3">/ projects</Typography>
        <Grid container>{componentsArr}</Grid>
      </Container>
  );
}

export default Projects;
