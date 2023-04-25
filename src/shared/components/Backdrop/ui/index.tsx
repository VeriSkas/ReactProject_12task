import React, { FC } from 'react';

import { BackdropProps } from '../config/interface';
import classes from './styles.module.scss';

export const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  return <div className={classes.Backdrop} onClick={onClick}></div>;
};
