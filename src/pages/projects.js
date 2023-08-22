import { Container } from "@mui/system";
import "../App.css";
import Project from "../components/Project";

import React from "react";

// MUI Grid
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function Projects() {
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
        <h1>Projects</h1>
        <Grid container spacing={4}>
          <Grid item>
            <Item style={{ paddingBottom: "10px" }}>
              <Project></Project>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Projects;
