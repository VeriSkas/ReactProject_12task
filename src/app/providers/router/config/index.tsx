import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../../shared/constants/paths';
import LoginPage from '../../../../pages/LoginPage';
import SignUpPage from '../../../../pages/SignUpPage';

const StartPage = React.lazy(async () => await import('../../../../pages/StartPage'));

export const Routes = [
  {
    path: PATH.login,
    element: <React.Suspense fallback={'Loading'}>{<StartPage />}</React.Suspense>,
    children: [
      {
        path: PATH.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: PATH.signUp,
    element: <React.Suspense fallback={'Loading'}>{<StartPage />}</React.Suspense>,
    children: [
      {
        path: PATH.signUp,
        element: <SignUpPage />,
      },
    ],
  },
  { path: '*', element: <Navigate to={PATH.login} replace /> },
];
