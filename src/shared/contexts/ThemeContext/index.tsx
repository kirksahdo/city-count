import { useContext } from "react";
import { createContext, useState, useCallback } from "react";
import { ThemeProvider as ThemeMaterialProvider } from "@emotion/react";
import { Box, Theme } from "@mui/material";

import { IThemeContextData, Props } from "./interfaces";
import { DarkTheme } from '../../themes/Dark';
import { LightTheme } from '../../themes/Light';


const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeProvider: React.FC<Props> = ({children})=> {

  const [theme, setTheme] = useState<Theme>(LightTheme);

  const toggleTheme = useCallback(() => {
    if(theme === DarkTheme){
      setTheme(LightTheme)
    }
    else{
      setTheme(DarkTheme)
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeMaterialProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeMaterialProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}

export {useTheme, ThemeProvider};