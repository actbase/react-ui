import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialTypography from './typography';

export default {
  title: 'General/Typography',
  args: {
    children: 'children',
  },
  component: InitialTypography,
} satisfies Meta<typeof InitialTypography>;

type Story = StoryObj<typeof InitialTypography>;
export const Typography: Story = {
  render: (args) => <InitialTypography {...args} />,
};
