import React, { FC } from 'react';

import { ButtonProps } from './interface';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={classes.Button} onClick={onClick}>
      {children}
    </button>
  );
};
