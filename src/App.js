import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Blog1_CORs from "./blogs/1_Cors";
import Projects from "./pages/projects";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000626",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/CORs" element={<Blog1_CORs />} />
          </Routes>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
