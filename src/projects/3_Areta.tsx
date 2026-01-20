import { Box, Button, Grid, Typography } from '@mui/material';
import { GitHub as GitHubIcon, DesignServices as DesignServicesIcon, Apple as AppleIcon } from '@mui/icons-material';
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
          Expo • React Native • Expo Router • React Native Paper • Supabase • TanStack Query
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            variant="contained"
            sx={{ background: 'white', ':hover': { backgroundColor: '#FF3A20', color: 'white' } }}
            startIcon={<AppleIcon />}
            href="https://apps.apple.com/au/app/areta/id6757452323"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
          </Button>
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
        </Box>
        <TLDR>
          Areta is a monthly fitness challenge mobile application built with Expo, React Native, and TypeScript. The app features one active challenge at a time, where users submit numeric progress during the month. The best submission wins, and leaderboards rank users by best value with earliest achievement as the tie-breaker.
        </TLDR>
        <Grid container>
          <Grid item xs={12}>
            <BlogPara>
              Areta is a mobile application built with Expo (Managed), React Native, and TypeScript. The app uses Expo Router for navigation, React Native Paper for UI components, Supabase for authentication, database, and security, and TanStack Query for all server data management. The application has been successfully launched to the iOS App Store.
            </BlogPara>
            <BlogPara>
              The app operates on a monthly challenge system where one challenge is active at a time. Users submit numeric progress throughout the month, and their best submission counts as their score. Leaderboards dynamically rank participants by their best value, with the earliest achievement serving as the tie-breaker. This focused approach eliminates distractions like feeds and photos, keeping the emphasis on performance and improvement.
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
