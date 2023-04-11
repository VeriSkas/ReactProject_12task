import React, { FC } from 'react';

import { ButtonProps } from '../config/interface';
import { useThemeContext } from '../../../helpers/useTheme';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, onClick, type, color }) => {
  const [theme] = useThemeContext();

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
