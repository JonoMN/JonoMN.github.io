import { Container, Grid, Typography, Box, Button, Collapse } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { initParticlesEngine } from '@tsparticles/react';
import TimelineComponent from '../components/Timeline';
import { EducationCard } from '../components/EducationCard';
import { CreatedByFooter } from '../components/CreatedByFooter';
import Project from '../components/Project';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../constants';
import { useScrollOpacity } from '../hooks/useScrollOpacity';
import ParticlesBackground from '../components/ParticlesBackground';
import '../App.css';

function Home(): JSX.Element {
  const [readMore, setReadMore] = useState<boolean>(false);
  const [particlesInit, setParticlesInit] = useState<boolean>(false);
  const opacity = useScrollOpacity();
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log('Initializing particles engine...');
      try {
        await loadSlim(engine);
        console.log('Particles engine loaded successfully');
        setParticlesInit(true);
      } catch (error) {
        console.error('Error loading particles engine:', error);
      }
    });
  }, []);

  // Update opacity directly on the DOM element to avoid re-rendering Particles
  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.style.opacity = opacity.toString();
    }
  }, [opacity]);

  return (
    <>
      {particlesInit && <ParticlesBackground ref={particlesRef} />}
      <div className="gradient_background" style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          top: '30vh',
        }}
      >
        <Container
          sx={{
            height: '800px',
          }}
        >
          <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2', lg: 'h1' } }}>JONATHAN NELSON</Typography>
          <Typography
            style={{ color: '#FF3A20' }}
            sx={{
              typography: { xs: 'h6', sm: 'h5', md: 'h4', lg: 'h3' },
            }}
          >
            // Fullstack Developer
          </Typography>
        </Container>

        <Container sx={{ width: { xs: '80%', lg: '60%' } }}>
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Featured Projects & Blogs
            </Typography>
            <Grid sx={{ mb: 2 }} container spacing={2}>
              {FEATURED_PROJECTS.map((project, index) => (
                <Grid item xs={12} md={4} xl={3} key={index}>
                  <Project
                    title={project.name}
                    topics={project.topics}
                    desc={project.desc}
                    link={project.link}
                    image={project.image}
                    height="120px"
                  />
                </Grid>
              ))}
              <Grid
                item
                xs={6}
                md={4}
                xl={3}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              />
            </Grid>
            <Button
              variant="outlined"
              size="small"
              sx={{ color: 'white', borderColor: 'white', mr: 1 }}
              component={Link}
              to="/projects"
              aria-label="View all projects"
            >
              View All Projects
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ color: 'white', borderColor: 'white' }}
              component={Link}
              to="/blog"
              aria-label="View all blogs"
            >
              View All Blogs
            </Button>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              From the moment I powered on my first computer, I felt a spark. Software development is not just a
              profession to me; it's a calling. I'm inspired by the boundless potential it holds, the idea that a line
              of code today can reshape the world tomorrow. I don't just aim to create software; I strive to foster
              innovation and catalyze global productivity.
            </Typography>
            <Collapse in={readMore}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Armed with a degree in Computer Science, I have honed my skills to tackle the most challenging technical
                puzzles. During my computer science degree, I specialized in Full Stack development coming to a pinnacle
                with the successful development of a greenfield app for the financial consulting business, BUSINESSNAV.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                But my journey didn't stop there. My quest for growth led me to a Business Management degree, and it's
                here that I found the perfect marriage of tech and strategy. Drawing from this dual expertise, I've
                cultivated not just technical proficiency, but a broader vision that blends project management, client
                communication, and team synergy. It's this holistic perspective that lets me see beyond the code,
                understanding how technology intertwines with the pulse of business.
              </Typography>
            </Collapse>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setReadMore(!readMore)}
              sx={{ color: 'white', borderColor: 'white' }}
              aria-label={readMore ? 'Collapse About Me section' : 'Expand About Me section'}
            >
              {readMore ? 'Read Less' : 'Read More'}
            </Button>
          </Box>

          <Box sx={{ mb: 10 }}>
            <TimelineComponent />
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              My Education
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <EducationCard degree="Bachelor IT" major="Major Computer Science" />
              </Grid>
              <Grid item xs={12} md={6}>
                <EducationCard degree="Bachelor Business" major="Major Management" />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              pb: 3,
              width: { xs: '100%', md: '60%' },
              margin: 'auto',
            }}
          >
            <CreatedByFooter />
          </Box>
        </Container>
      </div>
    </div>
    </>
  );
}

export default Home;
