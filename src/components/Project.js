import temp1 from "../img/BNAV MockUp.png";
import { CardActionArea } from "@mui/material";

// MUI Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Project() {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 400 }}
        image={temp1}
        alt="Live from space album cover"
      />
      <CardContent>
        <Typography component="div" variant="h5">
          Peak Performance App (QUT CAPSTONE Project)
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          React Native • AWS • Node
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          width="100"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia nec augue ac aliquam. Fusce consectetur, enim at blandit
          volutpat, nisl turpis bibendum eros, eget congue nunc turpis quis
          erat. Quisque tincidunt, sapien a ultricies egestas, sapien arcu
          sollicitudin purus, ut efficitur enim leo nec metus. Suspendisse sed
          rhoncus urna. Vestibulum ut malesuada turpis, non aliquam nisl. Nullam
          sodales lobortis libero, non congue risus semper quis.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Project;
