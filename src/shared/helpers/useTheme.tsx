import { useEffect, useState } from 'react';
import { LocalStorageKey } from '../constants/localStorage';

type Theme = 'theme1' | 'theme2';

export const useTheme = (): (() => void) => {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem(LocalStorageKey.theme) as Theme ?? 'theme1');

  const toggleTheme = (): void => {
    setTheme(theme === 'theme1' ? 'theme2' : 'theme1');
  };

  useEffect(() => {
    const filter = `var(--filter-${theme})`;

    document.body.style.setProperty('--global--filter', filter);
    localStorage.setItem(LocalStorageKey.theme, theme);
  }, [theme]);

  return toggleTheme;
};
