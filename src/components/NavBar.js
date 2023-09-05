import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import Blog from "../pages/blog";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "../App.css";

function NavBar() {
  return (
    <AppBar
      position="fixed"
      className="navbar"
      style={{
        background: "rgba(355, 355, 355, 0.15)",
      }}
    >
      <Toolbar>
        <Container component="div" sx={{ flexGrow: 1 }}>
          <IconButton
            aria-label="LinkedIn"
            color="inherit"
            href="https://www.linkedin.com/in/jonathan-m-nelson/"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            color="inherit"
            href="https://github.com/JonoMN/"
          >
            <GitHubIcon />
          </IconButton>
        </Container>
        <Button color="inherit" component={Link} to="/">
          / Home
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          / Projects
        </Button>
        <Button color="inherit" component={Link} to="/blog">
          / Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
