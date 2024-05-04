import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";

function BlogHeading(props) {
  return (
    <Typography
      variant="h5"
      component="div"
      sx={{ pt: 3, width: "75%", margin: "auto" }}
    >
      {props.content}
    </Typography>
  );
}

export default BlogHeading;
