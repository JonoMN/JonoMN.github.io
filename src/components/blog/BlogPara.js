import Typography from "@mui/material/Typography";

function BlogPara(props) {
  return (
    <Typography
      component="div"
      variant="body"
      sx={{pb: 2}}
    >
      {props.children}
    </Typography>
  );
}

export default BlogPara;
