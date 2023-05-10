import { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    img: 'https://images.freeimages.com/fic/images/icons/725/colobrush/256/user_woman.png',
    alt: 'Logo',
    text: 'Logo',
  },
};
