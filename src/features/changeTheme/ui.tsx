import React, { FC, useContext } from 'react';

import { ThemeContext } from '../../app/providers/with-theme';
import { Button } from '../../shared/components/Button/ui/Button';

export const ThemeSwitcher: FC<{}> = () => {
  const [, toggleTheme] = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>&#128262;</Button>;
};
