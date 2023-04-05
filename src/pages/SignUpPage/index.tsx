import React, { FC } from 'react';

import { LoginSignUpForm } from '../../entities/LoginSignUpForm/LoginSignUpForm';
import { PATH } from '../../shared/constants/paths';
import { LinkText, Title } from '../../shared/constants/text';
import classes from './styles.module.scss';

export const SignUpPage: FC<{}> = () => {
  return (
    <div className={classes.SignUpPage}>
      <LoginSignUpForm title={Title.signUp} linkTo={PATH.login} linkText={LinkText.returnLogIn} />
    </div>
  );
};

export default SignUpPage;
