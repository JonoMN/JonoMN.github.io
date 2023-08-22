import temp1 from "../img/BNAV MockUp.png";
import { CardActionArea } from "@mui/material";

// MUI Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Blog() {
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent>
        <Typography component="div" variant="h5">
          Who the hell is CORs, and why is he breaking my website?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          22/08/23
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          CORs • AWS • Node
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
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

export default Blog;
