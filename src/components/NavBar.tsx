import { AppBar, Toolbar, Button, IconButton, Container, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import DrawerComponent from './Drawer';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '../constants';
import '../App.css';

function NavBar(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="fixed" className="navbar" sx={{ background: 'rgba(255, 255, 255, 0.15)' }}>
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div>
              {NAVIGATION_LINKS.map((link) => (
                <Button key={link.path} color="inherit" component={Link} to={link.path}>
                  {link.label}
                </Button>
              ))}
            </div>
            <div>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                color="inherit"
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </div>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
