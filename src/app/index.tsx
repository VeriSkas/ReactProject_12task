import React, { FC } from 'react';

import { Routing } from './providers/router/ui';
import { withProviders } from './providers';

const App: FC = () => <Routing />;

export default withProviders(App);
