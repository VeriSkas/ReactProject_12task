import { Meta, StoryObj } from '@storybook/react';

import { Notification } from '.';
import { withTheme } from '../../lib/storybook';

const meta: Meta<typeof Notification> = {
  title: 'Notification',
  component: Notification,
  decorators: [withTheme],
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something wrong',
    show: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Something wrong, check your code',
    show: true,
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Do you mean it?',
    show: true,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Done!!!',
    show: true,
  },
};
