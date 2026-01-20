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
  { index: 0, src: '/financeTracker/accounts.png' },
  { index: 1, src: '/financeTracker/dashboard.png' },
  { index: 2, src: '/financeTracker/transactions.png' },
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
        <BlogTitle>Live Finance Tracker</BlogTitle>
        <Typography sx={{ pb: 3, mt: -2 }} variant="h6" component="div" color="#FF3A20">
          React • Typescript • Figma • Axios
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            variant="contained"
            sx={{ background: 'white', ':hover': { backgroundColor: '#FF3A20', color: 'white' } }}
            startIcon={<GitHubIcon />}
            href="https://github.com/JonoMN/Finance-Tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
          <Button
            variant="contained"
            sx={{ background: 'white', ':hover': { backgroundColor: '#FF3A20', color: 'white' } }}
            startIcon={<DesignServicesIcon />}
            href="https://www.figma.com/file/fhV2Ymxvr71EF7t3BEPmjq/Finance-Tracker-Website?type=design&node-id=0%3A1&mode=design&t=Wx9mRpjb5mmkuzbz-1"
            target="_blank"
            rel="noopener noreferrer"
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
            Swagger
          </Button>
        </Box>
        <TLDR>
          A personal finance tracking website using React and TypeScript, featuring live data integration from the UP
          bank API via Axios. This project highlights my skills in creating secure, user-centric digital solutions.
        </TLDR>
        <Grid container>
          <Grid item xs={12}>
            <BlogPara>
              This project showcases a personal finance tracking website, custom-designed in Figma and developed using
              React with TypeScript. It features seamless integration with the UP banking API through Axios to fetch
              live financial data securely.
            </BlogPara>
            <BlogPara>
              The website provides a user-friendly interface that dynamically displays financial insights and account
              balances, helping users manage their finances effectively. The application is designed with performance and
              security in mind, ensuring that personal data is handled with utmost care. This project demonstrates my
              capabilities in full-stack development and my commitment to creating practical, user-oriented solutions.
            </BlogPara>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Slider slides={slideData} />
      </Box>
    </Box>
  );
}

export default Project;
