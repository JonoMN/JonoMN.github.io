import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";

function TLDR(props) {
  return (
    <Container
      sx={{
        pt: 2,
        pb: 2,
      }}
    >
      <Card
        sx={{
          display: "flex",
          background: "rgba(255, 255, 255, .10)",
          pt: 2,
          pb: 2,
          width: "75%",
          margin: "auto",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="body"
          component="div"
          sx={{ width: "95%", margin: "auto" }}
        >
          <b>TL;DR: </b>
          {props.content}
        </Typography>
      </Card>
    </Container>
  );
}

export default TLDR;
