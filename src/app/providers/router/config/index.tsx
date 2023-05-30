import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../../shared/config/constants';

const Layout = lazy(async () => await import('../../../../pages/Layout'));
const MainPage = lazy(async () => await import('../../../../pages/MainPage'));
const LoginPage = lazy(async () => await import('../../../../pages/LoginPage'));
const SignUpPage = lazy(async () => await import('../../../../pages/SignUpPage'));
const UserInfoPage = lazy(async () => await import('../../../../pages/UserInfoPage'));

export const PrivateRoutes = [
	{
		path: PATH.home,
		element: <Layout />,
		children: [
			{
				path: PATH.home,
				element: <MainPage />,
				children: [
					{
						path: `${PATH.userInfo}/${PATH.userInfoParam}`,
						element: <UserInfoPage />,
					},
				],
			},
		],
	},
	{ path: '*', element: <Navigate to={PATH.home} replace /> },
];

export const PublishRoutes = [
	{
		path: PATH.login,
		element: <Layout />,
		children: [
			{
				path: PATH.login,
				element: <LoginPage />,
			},
		],
	},
	{
		path: PATH.signUp,
		element: <Layout />,
		children: [
			{
				path: PATH.signUp,
				element: <SignUpPage />,
			},
		],
	},
	{ path: '*', element: <Navigate to={PATH.login} replace /> },
];
