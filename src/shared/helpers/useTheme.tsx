import { useLayoutEffect, useState } from 'react';
import { LocalStorageKey } from '../constants/localStorage';

type Theme = 'theme1' | 'theme2';

export const useTheme = (): (() => void) => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = isDarkTheme ? 'theme2' : 'theme1';
  const [theme, setTheme] = useState<Theme>(
    () => localStorage.getItem(LocalStorageKey.theme) as Theme ?? defaultTheme
  );

  const toggleTheme = (): void => {
    setTheme(theme === 'theme1' ? 'theme2' : 'theme1');
  };

  useLayoutEffect(() => {
    const filter = `var(--filter-${theme})`;

    document.body.style.setProperty('--global--filter', filter);
    localStorage.setItem(LocalStorageKey.theme, theme);
  }, [theme]);

  return toggleTheme;
};
