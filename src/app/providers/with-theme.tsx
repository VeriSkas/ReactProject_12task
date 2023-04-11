import React from 'react';

import { useTheme } from '../../shared/helpers/useTheme';
import { ThemeContext } from '../../shared/contexts/themeContext';

export const withTheme = (component: () => React.ReactNode) => () => {
  const [theme, setTheme] = useTheme();

  return <ThemeContext.Provider value={[theme, setTheme]}>{component()}</ThemeContext.Provider>;
};
