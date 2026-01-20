import Project from '../components/Project';
import Grid from '@mui/material/Grid';
import { Typography, Container } from '@mui/material';
import bnavMockup from '../img/BNAV MockUp.png';
import financeTracker from '../img/FinanceTracker.png';
import areta from '../img/Areta.png';
import '../App.css';

interface ProjectData {
  name: string;
  topics: string;
  link: string;
  image: string;
}

const projects: ProjectData[] = [
  {
    name: 'Peak Performance App (QUT Capstone)',
    topics: 'React Native • Node.js • Agile Methodologies • Testing Practices • System Architecture Design',
    link: '/projects/peak-performance',
    image: bnavMockup,
  },
  {
    name: 'Live Finance Tracker',
    topics: 'React • Typescript • Figma • Axios',
    link: '/projects/finance-tracker',
    image: financeTracker,
  },
  {
    name: 'Areta',
    topics: 'React Native • TypeScript • Mobile App Development',
    link: '/projects/areta',
    image: areta,
  },
];

function Projects(): JSX.Element {
  return (
    <Container sx={{ width: '80%', margin: 'auto', px: 4 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>/ projects</Typography>
      <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex' }}>
            <Project
              title={project.name}
              topics={project.topics}
              link={project.link}
              image={project.image}
              height="250px"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
