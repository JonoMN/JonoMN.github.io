import { Box, Button, Grid, Typography } from '@mui/material';
import { GitHub as GitHubIcon, DesignServices as DesignServicesIcon, DataObject as DataObjectIcon } from '@mui/icons-material';
import TLDR from '../components/blog/TLDR';
import BlogTitle from '../components/blog/BlogTitle';
import BlogPara from '../components/blog/BlogPara';
import Slider from '../components/Slider';
import '../App.css';

interface SlideData {
  index: number;
  src: string;
}

const slideData: SlideData[] = [
  { index: 0, src: '/areta/home.png' },
  { index: 1, src: '/areta/leaderboard.png' },
  { index: 2, src: '/areta/challenges.png' },
];

function Project(): JSX.Element {
  return (
    <Box sx={{ overflowX: 'hidden', mb: '75px' }}>
      <Box
        sx={{
          width: { xs: '80%', md: '50%' },
          margin: 'auto',
          textAlign: 'justify',
          mb: 2,
        }}
      >
        <BlogTitle>Areta</BlogTitle>
        <Typography sx={{ pb: 3, mt: -2 }} variant="h6" component="div" color="#FF3A20">
          React Native • TypeScript • Mobile App Development
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            variant="contained"
            sx={{ background: 'white', ':hover': { backgroundColor: '#FF3A20', color: 'white' } }}
            startIcon={<GitHubIcon />}
            href=""
            target="_blank"
            disabled
          >
            Github
          </Button>
          <Button
            variant="contained"
            sx={{ background: 'white', ':hover': { backgroundColor: '#FF3A20', color: 'white' } }}
            startIcon={<DesignServicesIcon />}
            href=""
            target="_blank"
            disabled
          >
            Figma
          </Button>
          <Button
            variant="contained"
            sx={{ background: 'white', ':hover': { backgroundColor: '#FF3A20', color: 'white' } }}
            startIcon={<DataObjectIcon />}
            href=""
            target="_blank"
            disabled
          >
            API Docs
          </Button>
        </Box>
        <TLDR>
          Areta is a fitness challenge tracking mobile application built with React Native and TypeScript. The app enables users to participate in competitive fitness challenges, track their progress, and compete on leaderboards.
        </TLDR>
        <Grid container>
          <Grid item xs={12}>
            <BlogPara>
              Areta is a modern mobile fitness challenge application designed to motivate users through competitive challenges. Built with React Native and TypeScript, the app provides a clean and intuitive interface for tracking fitness achievements and competing with others.
            </BlogPara>
            <BlogPara>
              The application features a comprehensive challenge system where users can participate in various fitness challenges, submit their progress, and view their rankings on dynamic leaderboards. The app includes a home screen displaying current challenges and personal best scores, a detailed leaderboard view showing rankings and achievements, and a challenges screen for browsing current and upcoming competitions. With its user-friendly design and real-time tracking capabilities, Areta demonstrates modern mobile app development practices and user-centric design principles.
            </BlogPara>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Slider slides={slideData} imagePadding="0 0.5vw" slideWidth={35} maxHeight="70vh" />
      </Box>
    </Box>
  );
}

export default Project;
