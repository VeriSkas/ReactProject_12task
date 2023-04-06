import React, { FC, useContext } from 'react';

import { Button } from '../../shared/components/Button/Button';
import { ThemeContext } from '../../app/providers/with-theme';

export const ThemeSwitcher: FC<{}> = () => {
  const [, toggleTheme] = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>&#128262;</Button>;
};
