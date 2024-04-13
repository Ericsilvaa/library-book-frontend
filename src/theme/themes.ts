import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    neutrals: {
      black: string;
      white: string;
      'grey-300': string;
      'grey-200': string;
      'grey-100': string;
      'grey-50': string;
    };
    system: {
      interBlue: string;
      error: string;
      errorLite: string;
      warning: string;
      success: string;
    };
    mobileTypography: {
      inputLabel: {
        fontWeight: string | number;
        fontSize: string;
        lineHeight: string;
      };
      captionBold: {
        fontWeight: string | number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
      caption: {
        fontWeight: string | number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    neutrals?: {
      black?: string;
      white?: string;
      'grey-300'?: string;
      'grey-200'?: string;
      'grey-100'?: string;
      'grey-50'?: string;
    };
    system?: {
      interBlue?: string;
      error?: string;
      errorLite?: string;
      warning?: string;
      success?: string;
    };
    mobileTypography?: {
      inputLabel?: {
        fontWeight: string | number;
        fontSize: string;
        lineHeight: string;
      };
      captionBold?: {
        fontWeight: string | number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
      caption?: {
        fontWeight: string | number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#575757'
    }
  },
  neutrals: {
    black: '#232323',
    white: '#FFFFFF',
    'grey-300': '#70767D',
    'grey-200': '#B9C2CD',
    'grey-100': '#E5EDF3',
    'grey-50': '#F5F8FA'
  },
  system: {
    interBlue: '#2961D2',
    error: '#D22947',
    errorLite: '#FEE7EA',
    warning: '#D76F0F',
    success: '#42835B'
  },
  typography: {
    allVariants: {
      color: '#232323'
    },
    fontFamily: ['Lato', 'sans-serif'].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px'
    },
    h2: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px'
    },
    h3: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '16px'
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px'
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px'
    }
  },
  mobileTypography: {
    inputLabel: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    },
    caption: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#70767D'
    },
    captionBold: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '16px',
      color: '#70767D'
    }
  }
});

export default theme;
