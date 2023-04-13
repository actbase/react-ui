import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialDivider from './divider';

export default {
  title: 'Layout/Divider',
  component: InitialDivider,
} satisfies Meta<typeof InitialDivider>;

type Story = StoryObj<typeof InitialDivider>;
export const Divider: Story = {
  render: (args) => <InitialDivider {...args} />,
};
