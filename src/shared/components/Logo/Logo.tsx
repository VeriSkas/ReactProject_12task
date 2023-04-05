import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PATH } from '../../constants/paths';
import classes from './Logo.module.scss';

export const Logo: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Link to={PATH.login}>
      <h3 className={classes.Logo}>{t('TextContent.logo')}</h3>
    </Link>
  );
};
