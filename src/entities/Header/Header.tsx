import React, { FC } from 'react';

import { Button } from '../../shared/components/Button/Button';
import { Logo } from '../../shared/components/Logo/Logo';
import { useTheme } from '../../shared/helpers/useTheme';
import classes from './Header.module.scss';

export const Header: FC<{}> = () => {
  const toggleTheme = useTheme();

  return (
    <div className={classes.Header}>
      <Logo />
      <Button onClick={toggleTheme}>&#128262;</Button>
    </div>
  );
};
