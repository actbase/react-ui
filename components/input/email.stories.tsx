import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalInputEmail from './email';

export default {
  title: 'Data Entry/Input',
  args: {
    placeholder: 'Enter your email address',
  },
  component: InternalInputEmail,
} satisfies Meta<typeof InternalInputEmail>;

type Story = StoryObj<typeof InternalInputEmail>;
export const Email: Story = {
  render: (args) => <InternalInputEmail {...args} />,
};
