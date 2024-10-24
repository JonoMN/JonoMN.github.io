import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar';
import Home from './pages/home';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Project2_FinanceTracker from './projects/2_FinanceTracker';
import Projects1_PeakPerformance from './projects/1_PeakPerformance';
import BlogPost from './components/BlogPost';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000626',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: '#ffffff', // Set all typography to white
    },
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <div style={{ paddingTop: '90px' }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/finance-tracker" element={<Project2_FinanceTracker />} />
          <Route path="/projects/peak-performance" element={<Projects1_PeakPerformance />} />          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;