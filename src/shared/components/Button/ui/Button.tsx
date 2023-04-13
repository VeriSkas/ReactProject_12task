import React, { FC } from 'react';

import { ButtonProps } from '../config/interface';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, onClick, type, color }) => {
  return (
    <button
      className={`${classes.Button} ${classes[type ?? 'contained']} ${classes[color ?? 'primary']}`}
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};
