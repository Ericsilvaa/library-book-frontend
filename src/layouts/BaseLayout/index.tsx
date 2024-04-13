import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export function BaseLayout({ children }: PropsWithChildren) {
  return <Box sx={{ width: '100%', display: 'flex' }}>{children}</Box>;
}
