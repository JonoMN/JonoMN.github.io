import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface BlogParaProps {
  children: ReactNode;
}

function BlogPara({ children }: BlogParaProps): JSX.Element {
  return (
    <Typography component="div" variant="body1" sx={{ pb: 2 }}>
      {children}
    </Typography>
  );
}

export default BlogPara;
