import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface BlogHeadingProps {
  children: ReactNode;
}

function BlogHeading({ children }: BlogHeadingProps): JSX.Element {
  return (
    <Typography component="div" variant="h5" sx={{ pt: 3, pb: 1 }}>
      {children}
    </Typography>
  );
}

export default BlogHeading;
