import Typography from "@mui/material/Typography";

export function CreatedByFooter() {
  return (
    <Typography align="center" color="text.secondary">
      Loosely designed in{" "}
      <Typography color="text.primary" component="span">
        Figma
      </Typography>{" "}
      and coded in{" "}
      <Typography color="text.primary" component="span">
        VS Code
      </Typography>{" "}
      by yours truly. Built with{" "}
      <Typography color="text.primary" component="span">
        React
      </Typography>{" "}
      and{" "}
      <Typography color="text.primary" component="span">
        MUI Core
      </Typography>
      , deployed with{" "}
      <Typography color="text.primary" component="span">
        GitHub Pages
      </Typography>
      .
    </Typography>
  );
}
