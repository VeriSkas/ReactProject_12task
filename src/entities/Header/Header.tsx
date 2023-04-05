import React, { FC } from 'react';

import { Logo } from '../../shared/components/Logo/Logo';
import { ThemeSwitcher } from '../../widgets/ThemeSwitcher/ThemeSwitcher';
import classes from './Header.module.scss';

export const Header: FC<{}> = () => {
  return (
    <div className={classes.Header}>
      <Logo />
      <ThemeSwitcher />
    </div>
  );
};
