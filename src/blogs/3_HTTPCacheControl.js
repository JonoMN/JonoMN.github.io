import "../App.css";

import React from "react";
import Box from "@mui/material/Box";

import TLDR from "../components/blog/TLDR";
import BlogHeading from "../components/blog/BlogHeading";
import BlogTitle from "../components/blog/BlogTitle";
import BlogPara from "../components/blog/BlogPara";
import BlogExample from "../components/blog/BlogExample";
import BlogDate from "../components/blog/BlogDate";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const codeBlock1 = 
`Cache-Control: max-age=600, stale-while-revalidate=30`;

const codeBlock2 =
`HTTP/1.1 200 OK
Cache-Control: max-age=600, stale-if-error=1200
Content-Type: text/plain

success`

const codeBlock3 =
`HTTP/1.1 500 Internal Server Error
Content-Type: text/plain

failure`

const codeBlock4 =
`HTTP/1.1 200 OK
Cache-Control: max-age=600, stale-if-error=1200
Age: 900
Content-Type: text/plain

success`

const codeBlock5 =
`HTTP/1.1 500 Internal Server Error
Content-Type: text/plain

failure`

function Blogs() {
  return (
      <Box
      sx={{ 
        width:  { xs: "80%", md: "50%" }, 
        margin: "auto", 
        textAlign: "justify", 
        mb: "100px"
      }}
      >
          <BlogDate>04/11/2023</BlogDate>
          <BlogTitle>HTTP Cache-Control Extensions for Stale Content</BlogTitle>
          <TLDR>
            The stale-if-error (SIE) HTTP Cache-Control extension allows a cache to return stale cache in favour of returning a hard error, improving availability. The stale-while-revalidate (SWR) HTTP Cache-Control extension allows a cache to immediately return a stale response while it revalidates it in the background, thereby hiding latency.
          </TLDR>
          <BlogHeading>Introduction: </BlogHeading>
          <BlogPara>
            This article was originally going to be solely about stale-while-revalidate (SWR), an HTTP Cache-Control extension I learned about when starting as a grad developer. However, upon researching this article I came across SWR’s brother-in-arms, stale-if-error (SIE). In finding the second half of this topic, I saw the need to expand this article's scope to cover the theory, considerations and implementation of both cache-control extensions.
          </BlogPara>
          <BlogPara>
            Both SWR and SIE are Cache-Control extensions that allow control over the use of stale responses by caches. Both are two carefully considered cases where it is determined that it is best that the cache responds with a stale response rather than the most up-to-date response. 
          </BlogPara>

          <BlogHeading>⏳Stale-while-revalidate (SWR): </BlogHeading>
          <BlogPara>
            Stale-while-revalidate (SWR) is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come up with the up-to-date data. 
          </BlogPara>
          <BlogPara>
            The following means the data is fresh and valid for 600 seconds (10 minutes) and for the next 30 seconds after that, if the data is outdated, it can still be used while the system tries to update it in the background. 
          </BlogPara>
          <SyntaxHighlighter language="http" style={materialDark}>
            {codeBlock1}
          </SyntaxHighlighter>
          <BlogPara>
            If the update doesn't happen within those 30 seconds, due to lack of traffic or other reasons, the data will then become completely stale, and any new request will have to wait for a fresh response.
          </BlogPara>
          <BlogPara>
            Servers usually set the total time of max-age plus stale-while-revalidate to the longest period they are okay with the data being used from the cache. For example, setting both to 600 seconds means the server is fine with the data being served from cache for up to 20 minutes.
          </BlogPara>

          <BlogHeading>❗Stale-if-error (SIE): </BlogHeading>
          <BlogPara>
            Stale-if-error (SIE) indicates that when an error is encountered, a cached stale response may be used, while trying to update the cache with fresh content. SIE aims to improve availability and resilience by ensuring content is still served, even when an error is encountered. The value set with this extension specifies how outdated the cached data can be before it should no longer be used and the error should be served. This extension is relevant when errors such as server issues (500, 502, 503, 504 status codes) occur.
          </BlogPara>
          <BlogPara>
            A response containing the following indicates that it is fresh for 600 seconds, and that it may be used if an error is encountered after becoming stale for an additional 1200 seconds.
          </BlogPara>
          <SyntaxHighlighter language="http" style={materialDark}>
            {codeBlock2}
          </SyntaxHighlighter>
          <BlogPara>
            Thus, if the cache attempts to validate 900 seconds afterwards and encounters:
          </BlogPara>
          <SyntaxHighlighter language="http" style={materialDark}>
            {codeBlock3}
          </SyntaxHighlighter>
          <BlogPara>
            The successful response can be returned instead:
          </BlogPara>
          <SyntaxHighlighter language="http" style={materialDark}>
            {codeBlock4}
          </SyntaxHighlighter>
          <BlogPara>
            After the age is greater than 1800 seconds (i.e., it has been stale for 1200 seconds), the cache must write the error message through.
          </BlogPara>
          <SyntaxHighlighter language="http" style={materialDark}>
            {codeBlock5}
          </SyntaxHighlighter>

          <BlogHeading>Conclusion:</BlogHeading>
          <BlogPara>
            While using stale-while-revalidate (SWR) and stale-if-error (SIE) it is important to consider how fresh your content needs to be versus how important it is to always have something available to show users. For SWR, choose a time that balances updating content quickly without making users wait too long. For SIE, decide how old content can be before it's better to show an error, based on how important and changeable your content is.
          </BlogPara>
      </Box>
  );
}

export default Blogs;
