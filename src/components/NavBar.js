import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Container, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DrawerComponent from './Drawer';

import '../App.css'; 

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="fixed" className="navbar" sx={{ background: "rgba(255, 255, 255, 0.15)" }}>
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div>
              <Button color="inherit" component={Link} to="/">/ Home</Button>
              <Button color="inherit" component={Link} to="/projects">/ Projects</Button>
              <Button color="inherit" component={Link} to="/blog">/ Blog</Button>
            </div>
            <div>
              <IconButton aria-label="LinkedIn" color="inherit" href="https://www.linkedin.com/in/jonathan-m-nelson/">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHub" color="inherit" href="https://github.com/JonoMN/">
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