import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../../shared/constants/paths';

const StartPage = React.lazy(async () => await import('../../../../pages/StartPage'));
const MainPage = React.lazy(async () => await import('../../../../pages/MainPage'));
const LoginPage = React.lazy(async () => await import('../../../../pages/LoginPage'));
const SignUpPage = React.lazy(async () => await import('../../../../pages/SignUpPage'));

export const Routes = [
  {
    path: PATH.home,
    element: <React.Suspense fallback={'Loading'}>{<StartPage />}</React.Suspense>,
    children: [
      {
        path: PATH.login,
        element: <React.Suspense fallback={'Loading'}>{<LoginPage />}</React.Suspense>,
      },
      {
        path: PATH.signUp,
        element: <React.Suspense fallback={'Loading'}>{<SignUpPage />}</React.Suspense>,
      },
      {
        path: PATH.home,
        element: <React.Suspense fallback={'Loading'}>{<MainPage />}</React.Suspense>,
        children: [],
      },
    ],
  },
  { path: '*', element: <Navigate to={PATH.login} replace /> },
];
