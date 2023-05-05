import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { PATH } from '../../../shared/config/constants/paths';

export const LogoutBtn: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <NavLink to={PATH.login} title={t('Tooltip.logout') ?? ''}>
      &#11185;
    </NavLink>
  );
};
