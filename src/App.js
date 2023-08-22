import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
