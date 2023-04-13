import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalInputPassword from './password';

export default {
  title: 'Data Entry/Input',
  args: {
    hidden: true,
    placeholder: 'Enter your password',
  },
  component: InternalInputPassword,
} satisfies Meta<typeof InternalInputPassword>;

type Story = StoryObj<typeof InternalInputPassword>;
export const Password: Story = {
  render: (args) => <InternalInputPassword {...args} />,
};
