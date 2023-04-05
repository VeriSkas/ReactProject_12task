import React, { FC } from 'react';

import { Button } from '../../shared/components/Button/Button';
import { useTheme } from './useTheme';

export const ThemeSwitcher: FC<{}> = () => {
  const toggleTheme = useTheme();

  return (
    <>
      <Button onClick={toggleTheme}>&#128262;</Button>
    </>
  );
};
