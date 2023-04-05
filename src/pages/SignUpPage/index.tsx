import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginSignUpForm } from '../../entities/LoginSignUpForm/LoginSignUpForm';
import { PATH } from '../../shared/constants/paths';
import classes from './styles.module.scss';

export const SignUpPage: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.SignUpPage}>
      <LoginSignUpForm
        title={t('Title.signUp')}
        linkTo={PATH.login}
        linkText={t('LinkText.returnLogIn')}
      />
    </div>
  );
};

export default SignUpPage;
