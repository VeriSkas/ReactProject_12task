import compose from 'compose-function';

import { withRouter } from './router/with-router';
import { withTheme } from './with-theme';

export const withProviders = compose(withRouter, withTheme);
