import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialTypography from './typography';

export default {
  title: 'General/Typography',
  args: {
    children: 'Typography',
    weight: 400,
    type: 'h1',
    size: 16,
  },
  argTypes: {
    children: {
      name: 'text',
      description: 'string',
    },
    weight: {
      name: 'font-weight',
      description: 'font weight',
      control: {
        type: 'select',
      },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    size: {
      name: 'font-size',
      description: 'font size',
    },
  },
  parameters: {
    controls: {
      exclude: ['css', 'el', 'type'],
    },
  },
  component: InitialTypography,
} satisfies Meta<typeof InitialTypography>;

type Story = StoryObj<typeof InitialTypography>;
export const Typography: Story = {
  render: (args) => <InitialTypography {...args} />,
};
