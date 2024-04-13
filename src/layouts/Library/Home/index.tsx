import Sidebar from '../../../components/Sidebar';
import { BaseLayout } from '../../../layouts/BaseLayout';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function LibraryHomeLayout({ children }: PropsWithChildren) {
  const isDesktop = true;

  return (
    <BaseLayout>
      {isDesktop && <Sidebar />}
      <Box id='main' component='main' sx={{ flexGrow: 1 }}>
        <Box sx={{ paddingBottom: !isDesktop ? '4rem' : '1rem' }}>{children}</Box>
      </Box>
    </BaseLayout>
  );
}
