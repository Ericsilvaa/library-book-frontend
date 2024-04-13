import { createTheme } from '@mui/material';
import theme from '@/theme/themes';
import { ReactNode } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  // redux store

  const dynamicTheme = createTheme({
    ...theme,
    palette: {}
  });

  return <div>ThemeWrapper</div>;
}
