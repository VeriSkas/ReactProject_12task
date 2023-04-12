import React, { FC } from 'react';

import { InputProps } from '../config/interface';
import classes from './Input.module.scss';

export const Input: FC<InputProps> = ({
  label,
  type,
  defaultValue,
  readonly,
  placeholder,
  error,
}) => {
  return (
    <div className={classes.Input}>
      {label && <label htmlFor={label}>{label}</label>}
      <div className={classes.Input_input}>
        <input
          type={type ?? 'text'}
          defaultValue={defaultValue ?? ''}
          id={label}
          readOnly={readonly ?? false}
          placeholder={placeholder ?? ''}
        />
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};
