import { useState, createContext, useEffect } from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import themeList from "../themes/themeList";
import { set } from "date-fns";

export const ThemeContext = createContext();

// Create a provider component that wraps the app
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(extendTheme(themeList["basic"]));
  const [snowSettings, setSnowSettings] = useState(false);
  const [themeSettings, setThemeSettings] = useState(JSON.parse(localStorage.getItem("scheduleSettings")));
  const [insideThemeSettings, setInsideThemeSettings] = useState(themeSettings);
  useEffect(() => {
 
    const config = { initialColorMode: 'light', useSystemColorMode: true };
    const newSettings = JSON.parse(localStorage.getItem("scheduleSettings"));
    setInsideThemeSettings(newSettings); // update the state, but wait theres more
    // this uses newSettings because insideThemeSettings is not updated yet
    const currentTheme = newSettings && newSettings['theme'] ? newSettings['theme'] : 'basic';
    setTheme(extendTheme({ ...themeList[currentTheme.toLowerCase()], config }));
    const currentSnow = newSettings['snow'] !== undefined ? newSettings['snow'] : false;
    setSnowSettings(currentSnow);


  }, [themeSettings]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeSettings }}>
        <ChakraProvider theme={theme}>
          <Box position="relative" zIndex={1}>
            {children}
          </Box>
          {snowSettings && <Snowfall />}
        </ChakraProvider>
    </ThemeContext.Provider>
  );

};

export default ThemeProvider;