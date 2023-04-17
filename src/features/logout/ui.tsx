import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const LogoutBtn: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <NavLink to={'/login'} title={t('Tooltip.logout') ?? ''}>
      &#11185;
    </NavLink>
  );
};
