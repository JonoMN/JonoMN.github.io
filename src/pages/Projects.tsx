import { Container } from '@mui/system';
import Project from '../components/Project';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import bnavMockup from '../img/BNAV MockUp.png';
import financeTracker from '../img/FinanceTracker.png';
import construction from '../img/Construction.png';
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
    name: 'Happy Hour Finder',
    topics: 'React (Next) • Node.js (Express) • AWS Lighsail • Postgres • Swagger',
    link: '',
    image: construction,
  },
];

function Projects(): JSX.Element {
  return (
    <Container>
      <Typography variant="h3">/ projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} xl={4} key={index} sx={{ p: 2 }}>
            <Project
              title={project.name}
              topics={project.topics}
              link={project.link}
              image={project.image}
              height="100%"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
