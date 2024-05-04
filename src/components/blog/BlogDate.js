import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";

function BlogPara(props) {
  return (
    <Typography
      variant="subtitle1"
      color="text.secondary"
      component="div"
      sx={{ width: "75%", margin: "auto" }}
    >
      {props.content}
    </Typography>
  );
}

export default BlogPara;
