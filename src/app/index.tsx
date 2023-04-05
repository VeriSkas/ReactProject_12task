import React, { FC } from 'react';

import { Routing } from '../pages';
import { withProviders } from '../shared/helpers/compose';
import { Header } from '../entities/Header/Header';
import styles from './styles.module.scss';

const App: FC = () => (
  <div className={styles.App}>
    <Header />
    <Routing />
  </div>
);

export default withProviders(App);
