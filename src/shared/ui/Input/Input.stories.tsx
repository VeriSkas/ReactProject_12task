import { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';
import { withTheme } from '../../lib/storybook/decorators';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  decorators: [withTheme],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Name',
    type: 'text',
    error: 'Something wrong',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Name',
    type: 'text',
    placeholder: 'enter something',
  },
};
