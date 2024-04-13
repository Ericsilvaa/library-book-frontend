import { ThemeProvider, createTheme } from '@mui/material';
import theme from '../../theme/themes';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBranding } from '../../features/branding/brandingSlice';

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const dispath = useDispatch<any>();
  const { data } = useSelector((state: any) => state.branding);

  useEffect(() => {
    if (!data) {
      console.log('🚀 ~ useEffect ~ data:', data);
      dispath(getBranding());
    }
  }, [data]);

  const dynamicTheme = createTheme({
    ...theme,
    palette: {
      primary: {
        main: data?.color_primary || theme.palette.primary.main
      },
      secondary: {
        main: data?.color_secondary || theme.palette.secondary.main
      }
    }
  });

  return <ThemeProvider theme={dynamicTheme}>{children}</ThemeProvider>;
}
