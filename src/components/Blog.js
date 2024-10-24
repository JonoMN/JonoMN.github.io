import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Blog({ title, date, topics, desc, link }) {
  return (
    <Box>
      <Box sx={{ pt: 3, pb: 3 }}>
        <CardActionArea component={Link} to={link}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {new Date(date).toLocaleDateString('en-GB')}
          </Typography>
          <Typography
            component="div"
            sx={{ typography: { xs: "h6", md: "h4" } }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            component="div"
            color="#FF3A20"
          >
            {topics}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {desc}
          </Typography>
        </CardActionArea>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
}

export default Blog;
