import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    type: 'contained',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Click me',
    type: 'outlined',
    color: 'primary',
  },
};

export const Link: Story = {
  args: {
    children: 'Click me',
    type: 'text',
    color: 'primary',
  },
};
