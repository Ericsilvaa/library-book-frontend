interface ILogos {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  white: string;
  black: string;
  transparent: string;
  default: string;
  rectangle: string;
  'tall-rectangle': string;
  square: string;
  'hor-white': string;
  'ver-white': string;
  'hor-color': string;
  'ver-color': string;
  'hor-black': string;
  'ver-black': string;
}

export interface IBranding {
  name: string;
  url: string;
  color_primary: string;
  color_secondary: string;
  agreements: string[];
  optional_fields: any;
  completed_at: string;
  logos: ILogos;
}

export interface IBrandingResponse {
  success: boolean;
  code: number;
  message: string;
  data: IBranding;
  completed_at: string;
  error: boolean | null;
}

export interface IBrandingState {
  data: IBranding | null;
  completed_at: string | null;
  isLoading: boolean;
  success: boolean | null;
  code: number | null;
  message: string | null;
  error: boolean | null;
}
