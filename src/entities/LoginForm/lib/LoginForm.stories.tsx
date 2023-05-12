import { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '..';
import { withRouter, withTheme } from '../../../shared/lib/storybook/decorators';

const meta: Meta<typeof LoginForm> = {
  title: 'LoginForm',
  component: LoginForm,
  decorators: [withRouter, withTheme],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    title: 'Login',
    linkTo: '/',
    linkText: 'Sign up',
  },
};
