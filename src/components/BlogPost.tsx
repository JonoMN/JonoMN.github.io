import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useBlogPost } from '../hooks/useBlogPost';

const BlogPost = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useBlogPost(slug || '');

  if (loading) {
    return (
      <Box
        sx={{
          width: { xs: '80%', md: '50%' },
          margin: 'auto',
          textAlign: 'center',
          mb: '100px',
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box
        sx={{
          width: { xs: '80%', md: '50%' },
          margin: 'auto',
          textAlign: 'center',
          mb: '100px',
        }}
      >
        <Typography color="error">
          {error ? `Error loading blog post: ${error.message}` : 'Blog post not found'}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: { xs: '80%', md: '50%' },
        margin: 'auto',
        textAlign: 'justify',
        mb: '100px',
      }}
    >
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {new Date(post.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </Typography>
      <Typography component="div" variant="h4" sx={{ pb: 2, textAlign: 'left' }}>
        {post.title}
      </Typography>

      <Container
        sx={{
          pt: 2,
          pb: 2,
        }}
      >
        <Card
          sx={{
            background: 'rgba(255, 255, 255, .10)',
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" component="div" sx={{ width: '100%', margin: 'auto', color: '#FF3A20' }}>
            <b>TL;DR</b>
          </Typography>
          <Typography>{post.desc}</Typography>
        </Card>
      </Container>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => <a style={{ color: 'white' }} {...props} />,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={materialDark}
                language={match[1]}
                PreTag="div"
                customStyle={{ borderRadius: '5px' }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter
                style={materialDark}
                PreTag="span"
                customStyle={{
                  paddingTop: '2px',
                  paddingBottom: '2px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  borderRadius: '5px',
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </Box>
  );
};

export default BlogPost;
