import { Container, Typography } from "@mui/material";
import Blog from "../components/Blog";
import frontMatter from 'front-matter';
import React, { useEffect, useState } from 'react';

const importAll = (r) => r.keys().map((key) => ({
  path: r(key), 
  name: key.replace('./', '').replace('.md', '') 
}));

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const markdownFiles = importAll(require.context('../blogs', false, /\.md$/));

      const loadedBlogs = await Promise.all(
        markdownFiles.map(async (file) => {
          const response = await fetch(file.path); 
          const content = await response.text();
          const { attributes } = frontMatter(content); 
          
          return { ...attributes, link: `/blog/${file.name}` }; 
        })
      );

      setBlogs(loadedBlogs);
    };

    loadBlogs();
  }, []);

  return (
    <Container>
      <Typography variant="h3">/ blog</Typography>
      <Typography 
        variant="body1"
        sx={{ pt: 3, pb: 3 }}
        color="text.secondary">
        I'll be honest - writing these blog posts is a bit of a selfish endeavor. They're my way of diving deep into topics 
        that I don't understand or just want to understand to a higher degree. So, while I try my best, there might be a few 
        slip-ups along the way. If you spot any mistakes, give me a shout! That’s how we all learn, right? Let's sail these 
        waters together and have some fun while we're at it!
      </Typography>

      <div>
        {blogs
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((blog, index) => (
            <Blog
              key={index}
              title={blog.title}
              date={blog.date}
              topics={blog.topics}
              desc={blog.desc}
              link={blog.link}
            />
          ))}
      </div>
    </Container>
  );
}

export default Blogs;