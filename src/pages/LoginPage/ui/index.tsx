import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginForm } from '../../../entities/LoginForm';
import { PATH } from '../../../shared/constants/paths';
import classes from './styles.module.scss';

const LoginPage: FC<{}> = () => {
  const { t } = useTranslation('login');

  return (
    <div className={classes.LoginPage}>
      <LoginForm title={t('Title.logIn')} linkTo={PATH.signUp} linkText={t('LinkText.signUp')} />
    </div>
  );
};

export default LoginPage;
