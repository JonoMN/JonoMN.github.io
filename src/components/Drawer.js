import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Button,
} from "@mui/material";
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
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
