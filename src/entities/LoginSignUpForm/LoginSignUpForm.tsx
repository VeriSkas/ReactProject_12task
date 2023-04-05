import React, { FC } from 'react';

import { MyLink } from '../../shared/components/MyLink/MyLink';
import { LoginSignUpFormProps } from './interface';
import classes from './LoginSignUpForm.module.scss';

export const LoginSignUpForm: FC<LoginSignUpFormProps> = ({ title, linkTo, linkText }) => {
  return (
    <div className={classes.LoginSignUpForm}>
      <h1>{title}</h1>
      <br />
      <MyLink to={linkTo} text={linkText} />
    </div>
  );
};
