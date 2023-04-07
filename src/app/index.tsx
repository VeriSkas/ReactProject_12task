import React, { FC } from 'react';

import { Routing } from './providers/router/ui';
import { withProviders } from './providers';
import { Header } from '../entities/Header/ui/Header';
import styles from './styles.module.scss';

const App: FC = () => (
  <div className={styles.App}>
    <Header />
    <Routing />
  </div>
);

export default withProviders(App);
