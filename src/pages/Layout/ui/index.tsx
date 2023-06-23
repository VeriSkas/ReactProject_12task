import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'widgets/index';
import { Spinner, Notification } from 'shared/ui';
import classes from './styles.module.scss';
import { useError } from 'shared/lib/utils/errorHandler';

const Layout: FC<{}> = () => {
  const { show, onClose, message } = useError();

  return (
    <>
      <Header />
      <div className={classes.Layout}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      {message && <Notification type="error" message={message} onClose={onClose} show={show} />}
    </>
  );
};

export default Layout;
