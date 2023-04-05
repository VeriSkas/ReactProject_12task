import React, { FC } from 'react';

import { LoginSignUpForm } from '../../entities/LoginSignUpForm/LoginSignUpForm';
import { PATH } from '../../shared/constants/paths';
import { LinkText, Title } from '../../shared/constants/text';
import classes from './styles.module.scss';

const LoginPage: FC<{}> = () => {
  return (
    <div className={classes.LoginPage}>
      <LoginSignUpForm title={Title.logIn} linkTo={PATH.signUp} linkText={LinkText.signUp} />
    </div>
  );
};

export default LoginPage;
