import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { useThemeContext } from '../../shared/helpers/useTheme';
import { Header } from '../../widgets/Header/ui/Header';
import classes from './styles.module.scss';

const StartPage: FC<{}> = () => {
  const [theme] = useThemeContext();

  return (
    <div className={`${classes.App} ${classes[theme]}`}>
      <Header />
      <div className={classes.StartPage}>
        <Outlet />
      </div>
    </div>
  );
};

export default StartPage;
