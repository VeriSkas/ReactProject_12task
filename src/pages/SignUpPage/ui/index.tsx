import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SignUpForm } from '../../../entities/SignUpForm';
import { PATH } from '../../../shared/constants/paths';
import classes from './styles.module.scss';

export const SignUpPage: FC<{}> = () => {
  const { t } = useTranslation('sign-up');

  return (
    <div className={classes.SignUpPage}>
      <SignUpForm
        title={t('Title.signUp')}
        linkTo={PATH.login}
        linkText={t('LinkText.returnLogIn')}
      />
    </div>
  );
};

export default SignUpPage;