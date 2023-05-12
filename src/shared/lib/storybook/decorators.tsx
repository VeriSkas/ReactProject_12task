import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoryContext } from '@storybook/react';

import classes from '../../../app/styles/themes/index.module.scss';

export const withTheme = (Story: any, context: StoryContext): JSX.Element => {
  const theme = context.globals.backgrounds?.value === '#1e1e1e' ? 'dark' : 'light';

  return (
    <div className={[classes.App, classes[theme]].join(' ')}>
      <Story {...context} />
    </div>
  );
};

export const withRouter = (Story: any, context: StoryContext): JSX.Element => {
  return (
    <BrowserRouter>
      <Story {...context} />
    </BrowserRouter>
  );
};

export const withLimitWidth = (Story: any, context: StoryContext): JSX.Element => {
  return (
    <div style={{ maxWidth: 300 }}>
      <Story {...context} />
    </div>
  );
};
