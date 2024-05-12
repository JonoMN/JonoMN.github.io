import Typography from "@mui/material/Typography";

function BlogPara(props) {
  return (
    <Typography
      variant="subtitle1"
      color="text.secondary"
      component="div"
    >
      {props.children}
    </Typography>
  );
}

export default BlogPara;
