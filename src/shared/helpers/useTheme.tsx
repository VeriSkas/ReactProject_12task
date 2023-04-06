import { useLayoutEffect, useState } from 'react';

import { LocalStorageKey } from '../constants/localStorage';

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

const getCurrentTheme = (): Theme => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = isDarkTheme ? 'dark' : 'light';

  return localStorage.getItem(LocalStorageKey.theme) as Theme ?? defaultTheme
}
