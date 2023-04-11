import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialTypography from './typography';

export default {
  title: 'Typography',
  args: {
    children: 'children',
  },
  component: InitialTypography,
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof InitialTypography>;
export const Typography: Story = {
  render: (args) => <InitialTypography {...args} />,
};
