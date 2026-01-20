import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Project2_FinanceTracker from './projects/2_FinanceTracker';
import Projects1_PeakPerformance from './projects/1_PeakPerformance';
import BlogPost from './components/BlogPost';
import { useScrollToTop } from './hooks/useScrollToTop';
import { THEME_CONFIG } from './constants';
import { Route, Routes } from 'react-router-dom';

const darkTheme = createTheme(THEME_CONFIG);

const ScrollToTop = (): null => {
  useScrollToTop();
  return null;
};

function App(): JSX.Element {
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
