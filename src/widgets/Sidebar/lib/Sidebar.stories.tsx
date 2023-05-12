import { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '..';
import { withRouter, withTheme } from '../../../shared/lib/storybook/decorators';

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withRouter, withTheme],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
