import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginSignUpForm } from '../../entities/LoginSignUpForm/ui/LoginSignUpForm';
import { PATH } from '../../shared/constants/paths';
import classes from './styles.module.scss';

const LoginPage: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.LoginPage}>
      <LoginSignUpForm
        title={t('Title.logIn')}
        linkTo={PATH.signUp}
        linkText={t('LinkText.signUp')}
      />
    </div>
  );
};

export default LoginPage;
