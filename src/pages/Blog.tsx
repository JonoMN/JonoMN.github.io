import { Container, Typography, Box } from '@mui/material';
import Blog from '../components/Blog';
import { useBlogs } from '../hooks/useBlogs';

function Blogs(): JSX.Element {
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return (
      <Container>
        <Typography variant="h3">/ blog</Typography>
        <Typography variant="body1" sx={{ pt: 3, pb: 3 }} color="text.secondary">
          Loading...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h3">/ blog</Typography>
        <Typography variant="body1" sx={{ pt: 3, pb: 3 }} color="error">
          Error loading blogs: {error.message}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3">/ blog</Typography>
      <Typography variant="body1" sx={{ pt: 3, pb: 3 }} color="text.secondary">
        I'll be honest - writing these blog posts is a bit of a selfish endeavor. They're my way of diving deep into
        topics that I don't understand or just want to understand to a higher degree. So, while I try my best, there
        might be a few slip-ups along the way. If you spot any mistakes, give me a shout! That's how we all learn,
        right? Let's sail these waters together and have some fun while we're at it!
      </Typography>

      <Box>
        {blogs
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
      </Box>
    </Container>
  );
}

export default Blogs;
