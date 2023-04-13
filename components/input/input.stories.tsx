import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalInput from './input';

export default {
  title: 'Data Entry/Input',
  args: {
    placeholder: 'placeholder',
  },
  component: InternalInput,
} satisfies Meta<typeof InternalInput>;

type Story = StoryObj<typeof InternalInput>;
export const Input: Story = {
  render: (args) => <InternalInput {...args} />,
};
