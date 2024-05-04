import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";

function BlogPara(props) {
  return (
    <Typography
      variant="body"
      component="div"
      sx={{ pt: 2, width: "75%", margin: "auto" }}
    >
      <b>Example: </b>
      <i>{props.content}</i>
    </Typography>
  );
}

export default BlogPara;
