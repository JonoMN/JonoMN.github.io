import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
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
          <ListItemButton onClick={toggleDrawer} sx={{ width: "200px" }}>
            <ListItemText>
              <Link to="/">/ Home</Link>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/projects">/ Projects</Link>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/blog">/ Blog</Link>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
