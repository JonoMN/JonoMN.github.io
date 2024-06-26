import Typography from "@mui/material/Typography";

function BlogHeading(props) {
  return (
    <Typography
      component="div"
      variant="h4"
      sx={{ pb: 2, textAlign: "left"}}
    >
      {props.children}
    </Typography>
  );
}

export default BlogHeading;
