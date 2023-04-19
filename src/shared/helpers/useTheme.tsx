import { useContext, useLayoutEffect, useState } from 'react';

import { LocalStorageKey } from '../constants/localStorage';
import { ThemeContext } from '../contexts/themeContext';

export type Theme = 'light' | 'dark';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(() => getCurrentTheme());

  useLayoutEffect(() => {
    localStorage.setItem(LocalStorageKey.theme, theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export const useThemeContext = (): [Theme, () => void] => {
  return useContext(ThemeContext);
}

export const getCurrentTheme = (): Theme => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = isDarkTheme ? 'dark' : 'light';

  return localStorage.getItem(LocalStorageKey.theme) as Theme ?? defaultTheme
}
