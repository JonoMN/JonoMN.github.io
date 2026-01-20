import { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  Container,
  ListItem,
  Button,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '../constants';

function DrawerComponent(): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={toggleDrawer} className="drawer">
        <List
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pt: '150%',
            pb: '150%',
          }}
        >
          {NAVIGATION_LINKS.map((link) => (
            <ListItem key={link.path}>
              <Button
                sx={{ width: '200px' }}
                color="inherit"
                component={Link}
                to={link.path}
                onClick={toggleDrawer}
              >
                {link.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <IconButton onClick={toggleDrawer} aria-label="Open navigation menu">
          <MenuIcon />
        </IconButton>
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
    </>
  );
}

export default DrawerComponent;
