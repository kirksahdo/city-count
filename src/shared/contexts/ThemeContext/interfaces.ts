import { Theme } from '@mui/material';

export interface IThemeContextData{
  theme: Theme;
  toggleTheme: () => void
}

export interface Props {
  children: React.ReactNode;
}