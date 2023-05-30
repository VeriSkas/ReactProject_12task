import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../../widgets';
import { Spinner } from '../../../shared/ui';
import classes from './styles.module.scss';

const Layout: FC<{}> = () => {
	return (
		<>
			<Header />
			<div className={classes.Layout}>
				<Suspense fallback={<Spinner />}>
					<Outlet />
				</Suspense>
			</div>
		</>
	);
};

export default Layout;
