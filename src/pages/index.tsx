import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { PATH } from '../shared/constants/paths';

const StartPage = React.lazy(async () => await import('./StartPage'));

export const Routing: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route
        path={PATH.login}
        element={
          <React.Suspense fallback={t('TextContent.loading')}>{<StartPage />}</React.Suspense>
        }
      >
        <Route index element={<LoginPage />} />
      </Route>
      <Route
        path={PATH.signUp}
        element={
          <React.Suspense fallback={t('TextContent.loading')}>{<StartPage />}</React.Suspense>
        }
      >
        <Route index element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<Navigate to={PATH.login} replace />} />
    </Routes>
  );
};
