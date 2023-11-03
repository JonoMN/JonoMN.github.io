import { Container } from "@mui/system";
import "../App.css";
import Blog from "../components/Blog";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// MUI Grid
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function Blogs() {
  let componentsArr = [];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#000626",
      }}
    >
      <Container
        className="aboutMe"
        style={{ color: "white", textAlign: "justify", paddingTop: "8vh" }}
      >
        <Box sx={{ pt: 5, pb: 3 }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ width: "75%", margin: "auto" }}
          >
            23/07/2023
          </Typography>
          <Typography
            component="div"
            variant="h4"
            sx={{ width: "75%", margin: "auto" }}
          >
            Who the hell is CORs, and why is he breaking my website?
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ width: "75%", margin: "auto" }}
          >
            CORs • Same-Origin Policy • CSRF
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{ pt: 7, width: "75%", margin: "auto" }}
          >
            What is CORS and why am I writing about it? Because it has been a
            thorn in my side for too long and I need a better understanding of
            how it works. The way I have learnt to understand CORS is that it is
            a stage in a complex resolution to a simple problem. The stages
            include the issue (CSRF), the resolution (SOP) and the relaxation of
            the resolution (CORS).
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ pt: 3, width: "75%", margin: "auto" }}
          >
            The issue (CSRF):
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{ pt: 1, width: "75%", margin: "auto" }}
          >
            The issue is cross-site request forgery (CSRF). CSRF is when a
            malicious site tricks your browser into making a cross-site request
            to a legitimate site. If the user has an authentication cookie for
            the legitimate site, the cookies will be sent along with the
            request. So the malicious site can perform transactions in the
            legitimate site on behalf of the user, despite not having direct
            access to the authentication cookie.
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ pt: 3, width: "75%", margin: "auto" }}
          >
            The resolution (SOP):
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{ pt: 1, width: "75%", margin: "auto" }}
          >
            To resolve this issue the same-origin policy (SOP) was created. SOP
            is a web browser security mechanism that aims to prevent websites
            from attacking each other by restricting how a resource loaded by
            one domain can interact with a resource from another domain. SOP
            allows a domain to issue requests to other domains, but not to
            access the responses unless the two URLs have the same protocol,
            port and host (the same origin). Although a necessary safety
            feature, this can be problematic as modern applications often
            reference third-party APIs and resources in their client side code.
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ pt: 3, width: "75%", margin: "auto" }}
          >
            The relaxation of the resolution (CORS):
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{ pt: 1, width: "75%", margin: "auto" }}
          >
            To maintain the security provided by the SOP but still allow
            applications to make legitimate requests to different domains CORS
            was created. CORS is a browser mechanism for integrating
            applications over different domains, a direct relaxation of SOP.
            CORS works by adding new HTTP headers that let servers describe
            which origins are permitted to read the information they send in
            response to requests.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Blogs;
