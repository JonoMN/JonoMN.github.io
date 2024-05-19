import { Container } from "@mui/system";
import "../App.css";
import Blog from "../components/Blog";

import React from "react";
import { Typography } from "@mui/material";

function Blogs() {

  let blogs = [
    {
      Name: "What fish can I catch with a React Hook?",
      Date: "02/04/2024",
      Topics: "React Hooks • Custom Hooks • React State",
      Desc: "TL;DR: React Hooks provide a flexible and concise solution to handle state and side effects in functional components. There are several built in React Hooks or you can build your own custom hooks to encapsulate and reuse stateful logic across different components.",
      Link: "/blog/react-hooks",
    },
    {
      Name: "Who the hell is CORs, and why is he breaking my website?",
      Date: "10/03/2024",
      Topics: "CORs • Same-Origin Policy • CSRF",
      Desc: "TL;DR: CORS is a web security feature that defines how sites with different domains are allowed to communicate. It allows servers to specify what sites are allowed to access their resources via HTTP headers.",
      Link: "/blog/Cors",
    },
    {
      Name: "HTTP Cache Control Extensions for Stale Content",
      Date: "04/11/2023",
      Topics: "HTTP Cache-Control Extensions • Stale-while-revalidate • Stale-if-error",
      Desc: "TL;DR: The stale-if-error (SIE) HTTP Cache-Control extension allows a cache to return stale cache in favour of returning a hard error, improving availability. The stale-while-revalidate (SWR) HTTP Cache-Control extension allows a cache to immediately return a stale response while it revalidates it in the background, thereby hiding latency.",
      Link: "/blog/http-cache-controls",
    },
    {
      Name: "Javascript Hoisting",
      Date: "25/11/2023",
      Topics: "Declarations and Initialisations • Function Scope • Hoisting",
      Desc: "TL:DR; In JavaScript, variable declarations (but not initialisations) are moved to the top of their relevant scope at run time. If the variable is used after it has been declared but before it has been initialised, it will be ‘undefined’.",
      Link: "/blog/javascript-hoisting",
    },
  ];

  let componentsArr = [];
  for (let i = 0; i < blogs.length; i++) {
    componentsArr.push(
      <Blog
        key={i}
        title={blogs[i].Name}
        date={blogs[i].Date}
        topics={blogs[i].Topics}
        desc={blogs[i].Desc}
        link={blogs[i].Link}
      />
    );
  }

  return (
      <Container>
        <Typography variant="h3">/ blog</Typography>
        <Typography 
          variant="body1"
          sx = {{pt:3, pb:3}}
          color="text.secondary">
            I'll be honest - writing these blog posts is a bit of a selfish endeavor. They're my way of diving deep into topics 
            that I don't understand or just want to understand to higher degree. So, while I try my best, there might be a few 
            slip-ups along the way. If you spot any mistakes, give me a shout! That’s how we all learn, right? Let's sail these 
            waters together and have some fun while we're at it!
          </Typography>
        <div>{componentsArr}</div>
      </Container>
  );
}

export default Blogs;
