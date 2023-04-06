import { Context, createContext } from 'react';
import { Theme } from '../helpers/useTheme';

export const ThemeContext: Context<[Theme, () => void]> =
  createContext(['light' as Theme, () => {}]);
