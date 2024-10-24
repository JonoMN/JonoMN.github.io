import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import frontMatter from 'front-matter';
import Card from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
  const { slug } = useParams(); 
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        const file = await import(`../blogs/${slug}.md`);
        const response = await fetch(file.default);
        const text = await response.text();

        const { attributes, body } = frontMatter(text);

        setMetadata(attributes);
        setContent(body); 
      } catch (error) {
        console.error("Error loading blog post:", error);
      }
    };

    loadBlogPost();
  }, [slug]);

  return (
    <Box
      sx={{ 
        width:  { xs: "80%", md: "50%" }, 
        margin: "auto", 
        textAlign: "justify", 
        mb: "100px"
      }}>
      <Typography
      variant="subtitle1"
      color="text.secondary"
      component="div"
    >
      {new Date(metadata.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
    </Typography>
    <Typography
      component="div"
      variant="h4"
      sx={{ pb: 2, textAlign: "left"}}
    >
      {metadata.title}
    </Typography>
      
      <Container
      sx={{
        pt: 2,
        pb: 2,
      }}
    >
      <Card
        sx={{
          background: "rgba(255, 255, 255, .10)",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="body"
          component="div"
          sx={{ width: "100%", margin: "auto", color: "#FF3A20" }}
        >
          <b>TL;DR</b>
        </Typography>
        <Typography>
          {metadata.desc}
        </Typography>
      </Card>
    </Container>
    <ReactMarkdown
        children={content}
        components={{
          a: ({ node, ...props }) => (
            <a style={{ color: "white" }} {...props} />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={materialDark}
                language={match[1]}
                PreTag="div"
                customStyle={{ borderRadius:"5px"}}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter
                style={materialDark}
                PreTag="span"
                customStyle={{ paddingTop: '2px',paddingBottom: '2px', paddingLeft: '8px', paddingRight: '8px', borderRadius:"5px"}}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          }
        }}
      />
      </Box>
  );
};

export default BlogPost;