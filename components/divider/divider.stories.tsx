import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Layout/Divider',
  component: UI.Divider,
} satisfies Meta<typeof UI.Divider>;

type Story = StoryObj<typeof UI.Divider>;
export const Divider: Story = {
  render: (args) => <UI.Divider {...args} />,
};
