import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { useThemeContext } from '../../shared/helpers/useTheme';
import classes from './styles.module.scss';

const StartPage: FC<{}> = () => {
  const [theme] = useThemeContext();

  return (
    <div className={`${classes.StartPage} ${classes[theme]}`}>
      <Outlet />
    </div>
  );
};

export default StartPage;
