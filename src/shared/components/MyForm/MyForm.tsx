import React, { FC } from 'react';
import classes from './MyForm.module.scss';

export const MyForm: FC<{ handleSubmit: any, inputs: any, button: any, link: any }> = ({
  handleSubmit,
  inputs,
  button,
  link,
}) => {
  return (
    <form onSubmit={handleSubmit} className={classes.MyForm}>
      {inputs}
      <div className={classes.FormBtns}>
        {button}
        <br />
        {link}
      </div>
    </form>
  );
};
