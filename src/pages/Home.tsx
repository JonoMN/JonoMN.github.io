import { Container, Grid, Typography, Box, Button, Collapse } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { initParticlesEngine } from '@tsparticles/react';
import TimelineComponent from '../components/Timeline';
import { EducationCard } from '../components/EducationCard';
import { CreatedByFooter } from '../components/CreatedByFooter';
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
            // Full-Stack Software Engineer
          </Typography>
        </Container>

        <Container sx={{ width: { xs: '80%', lg: '60%' } }}>
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Full-Stack Software Engineer with experience designing, developing, testing, and supporting enterprise web and mobile applications in production environments. Strong background in backend API development, microservice-based systems, and CI/CD pipelines, with hands-on experience supporting live systems and resolving defects.
            </Typography>
            <Collapse in={readMore}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Experienced in .NET, C#, RESTful services, SQL, and automated testing, with a strong willingness and proven ability to learn new enterprise platforms and technologies such as Java, Spring Boot, and Guidewire. Currently working as a Graduate Developer at the Australian College of Rural and Remote Medicine, where I analyse system requirements, contribute to technical design, develop backend REST APIs, and support production systems.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I hold dual degrees in Information Technology (Computer Science) and Business (Management) from Queensland University of Technology, completed in November 2023. My capstone project involved developing a greenfield mobile application for BusinessNav, a financial consulting firm, focused on improving workplace performance. Beyond technical skills, I'm actively involved in the tech community as Chair of the ACS Emerging Professionals Committee and a participant in the ACS Young Tech Ambassador Program.
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
            <Grid container spacing={2} sx={{ alignItems: 'stretch', width: '100%' }}>
              <Grid item xs={12} md={6} sx={{ display: 'flex', minWidth: 0, width: { xs: '100%', md: 'calc(50% - 8px)' } }}>
                <EducationCard 
                  degree="Bachelor Information Technology" 
                  major="Computer Science" 
                  link="https://www.qut.edu.au/courses/bachelor-of-information-technology"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', minWidth: 0, width: { xs: '100%', md: 'calc(50% - 8px)' } }}>
                <EducationCard 
                  degree="Bachelor Business" 
                  major="Management" 
                  link="https://www.qut.edu.au/courses/bachelor-of-business"
                />
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
