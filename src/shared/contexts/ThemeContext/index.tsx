import { useContext, useEffect } from 'react';
import { createContext, useState, useCallback } from 'react';
import { ThemeProvider as ThemeMaterialProvider } from '@emotion/react';
import { Box, Theme, useMediaQuery } from '@mui/material';

import { IThemeContextData, Props } from './interfaces';
import { DarkTheme } from '../../themes/Dark';
import { LightTheme } from '../../themes/Light';

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const getTheme = useCallback((themeName: string): Theme => {
    const themes = { light: LightTheme, dark: DarkTheme };
    return themes[themeName as keyof typeof themes];
  }, []);

  const systemPrefersTheme = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const getLocalStorageTheme = useCallback((): string => {
    let localTheme = localStorage.getItem('theme');
    if (localTheme != 'light' && localTheme != 'dark') {
      localTheme = systemPrefersTheme;
    }
    return localTheme;
  }, []);

  const [theme, setTheme] = useState<Theme>(getTheme(getLocalStorageTheme()));

  useEffect(() => {
    if (theme === DarkTheme) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    if (theme === DarkTheme) {
      setTheme(LightTheme);
    } else {
      setTheme(DarkTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeMaterialProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeMaterialProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { useTheme, ThemeProvider };
