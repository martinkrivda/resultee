import { useEffect, useState } from 'react';
import theme from '../theme';

export const useDarkMode = () => {
  const [themeObject, setTheme] = useState(theme);
  const [componentMounted, setComponentMounted] = useState(false);
  const {
    palette: { type },
  } = themeObject;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...themeObject,
      palette: {
        ...themeObject.palette,
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

  return [themeObject, toggleDarkMode, componentMounted];
};
