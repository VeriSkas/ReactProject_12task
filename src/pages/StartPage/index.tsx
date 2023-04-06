import React, { FC, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeContext } from '../../app/providers/with-theme';
import classes from './styles.module.scss';

const StartPage: FC<{}> = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`${classes.StartPage} ${classes[theme]}`}>
      <Outlet />
    </div>
  );
};

export default StartPage;
