import React, { FC } from 'react';
import classes from './styles.module.scss';

export const Spinner: FC<{}> = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
