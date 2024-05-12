import Typography from "@mui/material/Typography";

function BlogHeading(props) {
  return (
    <Typography
      component="div" 
      variant="h5"
      sx={{ pt: 3, pb: 1}}
    >
      {props.children}
    </Typography>
  );
}

export default BlogHeading;
