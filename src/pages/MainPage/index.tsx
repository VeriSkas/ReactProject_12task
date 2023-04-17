import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../widgets/Sidebar/ui/Sidebar';
import classes from './styles.module.scss';

const MainPage: FC<{}> = () => {
  return (
    <div className={classes.MainPage}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainPage;
