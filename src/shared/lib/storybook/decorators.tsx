import React from 'react';
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
