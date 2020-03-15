import { useEffect, useState } from 'react';
import themeObject from '../theme';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);
  const [componentMounted, setComponentMounted] = useState(false);
  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
    window.localStorage.setItem('theme', updatedTheme.palette.type);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    setComponentMounted(true);
    console.log(localTheme);
  }, []);

  return [theme, toggleDarkMode, componentMounted];
};
