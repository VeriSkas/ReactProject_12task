import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PATH } from '../../../constants/paths';
import logo from './images/logo.png';
import classes from './styles.module.scss';

export const Logo: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Link to={PATH.login} className={classes.Logo}>
      <h3 className={classes.LogoText}>{t('TextContent.logo')}</h3>
      <img src={logo} alt="Logo" />
    </Link>
  );
};
