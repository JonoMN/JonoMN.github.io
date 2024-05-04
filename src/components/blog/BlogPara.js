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
      {props.content}
    </Typography>
  );
}

export default BlogPara;
