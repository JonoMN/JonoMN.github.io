import Typography from "@mui/material/Typography";

function BlogPara(props) {
  return (
    <Typography
      variant="body"
      component="div"
      sx={{ pb: 2}}
    >
      <b>Example: </b>
      <i>{props.children}</i>
    </Typography>
  );
}

export default BlogPara;
