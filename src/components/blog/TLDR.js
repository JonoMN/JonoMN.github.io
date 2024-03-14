import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";

function TLDR() {
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
          <b>TL;DR: </b>CORS is a web security feature that defines how sites
          with different domains are allowed to communicate. It allows servers
          to specify what sites are allowed to access their resources via HTTP
          headers.
        </Typography>
      </Card>
    </Container>
  );
}

export default TLDR;
