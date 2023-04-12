import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialPassword from './password';

export default {
  title: 'Input/Password',
  args: {
    hidden: true,
    placeholder: 'Enter your password',
  },
  component: InitialPassword,
} satisfies Meta<typeof InitialPassword>;

type Story = StoryObj<typeof InitialPassword>;
export const Password: Story = {
  render: (args) => <InitialPassword {...args} />,
};
