import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';
import logo from './images/logo.png';
import '../../../app/styles/index.scss';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    img: logo,
    alt: 'Logo',
    text: 'Logo',
  },
};
