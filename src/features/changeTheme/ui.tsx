import React, { FC } from 'react';

import { useThemeContext } from '../../shared/helpers/useTheme';
import { Button } from '../../shared/components/Button/ui/Button';

export const ThemeSwitcher: FC<{}> = () => {
  const [, toggleTheme] = useThemeContext();

  return <Button onClick={toggleTheme}>&#128262;</Button>;
};
