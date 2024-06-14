import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  Container,
  ListItem,
  Button,
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={toggleDrawer} className="drawer">
        <List
          sx={{
            height: "100%",
            // width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pt: "150%",
            pb: "150%",
          }}
        >
          <ListItem>
            <Button
              sx={{ width: "200px" }}
              color="inherit"
              component={Link}
              to="/"
              onClick={toggleDrawer}
            >
              / Home
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ width: "200px" }}
              color="inherit"
              component={Link}
              to="/projects"
              onClick={toggleDrawer}
            >
              / Projects
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ width: "200px" }}
              color="inherit"
              component={Link}
              to="/blog"
              onClick={toggleDrawer}
            >
              / Blog
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <div>
        <IconButton aria-label="LinkedIn" color="inherit" href="https://www.linkedin.com/in/jonathan-m-nelson/">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="GitHub" color="inherit" href="https://github.com/JonoMN/">
          <GitHubIcon />
        </IconButton>
      </div>  
      </Container>
    </>
  );
}
export default DrawerComponent;
