import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";

function BlogHeading(props) {
  return (
    <Typography
      component="div"
      variant="h4"
      sx={{ width: "75%", margin: "auto" }}
    >
      {props.content}
    </Typography>
  );
}

export default BlogHeading;
