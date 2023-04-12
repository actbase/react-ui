import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialEmail from './email';

export default {
  title: 'Input/Email',
  args: {
    placeholder: 'Enter your email address',
  },
  component: InitialEmail,
} satisfies Meta<typeof InitialEmail>;

type Story = StoryObj<typeof InitialEmail>;
export const Email: Story = {
  render: (args) => <InitialEmail {...args} />,
};
