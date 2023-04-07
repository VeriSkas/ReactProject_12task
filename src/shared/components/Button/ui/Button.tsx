import React, { FC, useContext } from 'react';

import { ButtonProps } from '../config/interface';
import { ThemeContext } from '../../../contexts/themeContext';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, onClick, type, color }) => {
  const [theme] = useContext(ThemeContext);

  return (
    <button
      className={`${classes.Button} ${classes[type ?? 'contained']} ${
        classes[color ?? 'primary']
      } ${classes[theme]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
