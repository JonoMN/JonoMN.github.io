import { Container } from "@mui/system";
import "../App.css";
import Blog from "../components/Blog";

import React from "react";

// MUI Grid
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function Blogs() {
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
        <h1>Blog</h1>
        <Grid container spacing={4}>
          <Grid item>
            <Item style={{ paddingBottom: "10px" }}>
              <Blog></Blog>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Blogs;
