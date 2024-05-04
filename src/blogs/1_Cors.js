import { Container } from "@mui/system";
import "../App.css";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Typography";

import TLDR from "../components/blog/TLDR";
import BlogHeading from "../components/blog/BlogHeading";
import BlogTitle from "../components/blog/BlogTitle";
import BlogPara from "../components/blog/BlogPara";
import BlogExample from "../components/blog/BlogExample";
import BlogDate from "../components/blog/BlogDate";

function Blogs() {
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
        style={{ color: "white", textAlign: "justify", paddingTop: "8vh" }}
      >
        <Box sx={{ pt: 5, pb: 3 }}>
          <BlogDate content="23/07/2023"></BlogDate>
          <BlogTitle content="Who the hell is CORs, and why is he breaking my website?"></BlogTitle>
          <TLDR
            content="CORS is a web security feature that defines how sites
          with different domains are allowed to communicate. It allows servers
          to specify what sites are allowed to access their resources via HTTP
          headers."
          ></TLDR>
          <BlogHeading content="Introduction: "></BlogHeading>
          <BlogPara
            content="What is CORS and why am I writing about it? Because it has been a
            thorn in my side for too long and I need a better understanding of
            how it works and how to avoid the error I am sure we have all
            encountered at least once…"
          ></BlogPara>
          <Card
            component="img"
            sx={{
              display: "flex",
              width: "75%",
              margin: "auto",
              borderRadius: 2,
            }}
            src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/cors-error2.png"
          ></Card>
          <BlogPara
            content="The way I have come to understand CORS is that it is a single stage
            in a complex resolution to a simple problem. Sounds complicated, so
            let's break it down. The stages include the issue (CSRF), the
            resolution (SOP) and the relaxation of the resolution (CORS)."
          ></BlogPara>
          <BlogHeading content="🚩The issue (CSRF):"></BlogHeading>
          <BlogPara
            content="The issue is cross-site request forgery (CSRF). CSRF is when a
            malicious site tricks your browser into making a cross-site request
            to a legitimate site that you are authenticated with. If you have an
            authentication cookie for the legitimate site, the cookie will be
            sent along with the request. So the malicious site can perform
            transactions on the legitimate site on your behalf, despite not
            having direct access to the authentication cookie."
          ></BlogPara>
          <BlogExample
            content="You are currently logged into your online banking account, which
            uses a session cookie to authenticate your requests. You then access
            a malicious site that, unbeknownst to you, submits a hidden form
            that mimics the banking website's money transfer form. Because you
            are logged in to your banking account in the same browser session,
            your browser automatically includes your authentication cookie with
            the form submission. The banking website, seeing a legitimate
            request with your authentication cookie, processes the request as if
            it were initiated by you. Funds are transferred from your account to
            the destination specified in the malicious form and you just lost
            your life savings 😔."
          ></BlogExample>
          <BlogHeading content="🛠️The resolution (SOP):"></BlogHeading>
          <BlogPara
            content="To resolve this issue the same-origin policy (SOP) was created. SOP
            is a web browser security mechanism that aims to prevent websites
            from attacking each other by restricting how a resource loaded by
            one domain can interact with a resource from another domain. SOP
            allows a domain to issue requests to other domains, but not to
            access the responses unless the two URLs have the same protocol,
            port and host (the same origin). This essentially makes it
            impossible for a malicious site to make any requests to a legitimate
            site. However, this also makes it impossible for legitimate sites to
            make requests to other legitimate sites. Although a necessary safety
            feature, this can be problematic as legitimate modern applications
            often reference third-party APIs and resources that are not within
            their own domain."
          ></BlogPara>
          <BlogHeading content="⚙️The relaxation of the resolution (CORS):"></BlogHeading>
          <BlogPara
            content="CORS was created to maintain the security provided by the SOP but
            still allow applications to make legitimate requests to different
            domains. CORS achieves this by introducing additional HTTP headers
            that inform browsers about the permissions granted by servers to
            access their resources from other origins."
          ></BlogPara>
          <BlogPara
            content="Suppose your website (https://your-site.com) needs to fetch
            data from an API hosted on a different domain (my-api.com). To
            enable this cross-origin communication, the API server must be
            configured to include CORS headers specifying https://your-site.com
            as an allowed origin."
          ></BlogPara>
          <BlogPara content="First, I must configure the cross-origin resource sharing (CORS) headers on my server by adding https://your-site.com to the allowed origins list. These CORS headers can also specify the allowed HTTP methods and headers."></BlogPara>
          <BlogPara content="Your site then creates a request to access resources from my API (my-api.com). This request includes the Origin header (https://your-site.com), which indicates the origin of the request."></BlogPara>
          <BlogPara content="If the server accepts requests from the origin specified in the request header (https://your-site.com), it includes the Access-Control-Allow-Origin header in the response. The value of this header either matches the origin request header (https://your-site.com) or is a wildcard (*), indicating that the server accepts requests from any origin."></BlogPara>
          <BlogPara content=" Upon receiving the CORS headers from the server, the browser checks if the origin of the front-end application (https://your-site.com) matches the allowed origins specified by the server (Access-Control-Allow-Origin header). If there is a match and the requested method and headers are allowed, the browser proceeds with the request."></BlogPara>
          <BlogHeading content="Conclusion:"></BlogHeading>
          <BlogPara
            content="Although CORS and SOP provide important security protections, they
            are not sufficient on their own to ensure comprehensive security.
            CORS and SOP rely on both the client and server being correctly
            configured, malicious clients or servers could still manipulate
            requests outside of a browser environment or disable CORS on the
            server side. Therefore, additional security measures are still
            required such as input validation, authentication, and authorization
            checks, to ensure comprehensive protection against web threats."
          ></BlogPara>
        </Box>
      </Container>
    </div>
  );
}

export default Blogs;
