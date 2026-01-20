import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface BlogTitleProps {
  children: ReactNode;
}

function BlogTitle({ children }: BlogTitleProps): JSX.Element {
  return (
    <Typography component="div" variant="h4" sx={{ pb: 2, textAlign: 'left' }}>
      {children}
    </Typography>
  );
}

export default BlogTitle;
