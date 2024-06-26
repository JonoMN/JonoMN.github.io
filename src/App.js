import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Blog from "./pages/blog";

import Blog1_CORs from "./blogs/1_Cors";
import Blog2_ReactHooks from "./blogs/2_ReactHooks";
import Blog3_HTTPCacheControl from "./blogs/3_HTTPCacheControl";
import Blog4_JavascriptHoisting from "./blogs/4_JavascriptHoisting";

import Project2_FinanceTracker from "./projects/2_FinanceTracker";
import Projects1_PeakPerformance from "./projects/1_PeakPerformance";

import Projects from "./pages/projects";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000626",
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 500, // medium
    },
    h2: {
      fontWeight: 500, // medium
    },
    h3: {
      fontWeight: 500, // medium
    },
    h4: {
      fontWeight: 500, // medium
    },
    h5: {
      fontWeight: 500, // medium
    },
    h6: {
      fontWeight: 500, // medium
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <header>
          <NavBar></NavBar>
        </header>
        <div style={{ paddingTop: '90px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
              <Route path="/projects/finance-tracker" element={<Project2_FinanceTracker />} />
              <Route path="/projects/peak-performance" element={<Projects1_PeakPerformance />} />
            <Route path="/blog" element={<Blog />} />
              <Route path="/blog/CORs" element={<Blog1_CORs />} />
              <Route path="/blog/React-Hooks" element={<Blog2_ReactHooks />} />
              <Route path="/blog/http-cache-controls" element={<Blog3_HTTPCacheControl />} />
              <Route path="/blog/javascript-hoisting" element={<Blog4_JavascriptHoisting />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
