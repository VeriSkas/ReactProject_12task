import React, { FC } from 'react';

import classes from './Notification.module.scss';

export const Notification: FC<{
  type?: 'error' | 'warning' | 'info' | 'success';
  message?: string;
  show: boolean;
  onClose: () => void;
}> = ({ type, message, show, onClose }) => {
  return (
    <>
      {show && (
        <div
          className={`${classes.Notification} ${classes[type ?? 'error']}`}
          data-testid="notification-div"
        >
          <div className={classes.Closer}>
            <span className={classes.Cross} onClick={onClose}>
              X
            </span>
          </div>
          <div className={classes.Message}>{message ?? 'Notification'}</div>
        </div>
      )}
    </>
  );
};
