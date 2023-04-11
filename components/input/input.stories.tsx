import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialInput from './input';

export default {
  title: 'Input',
  args: {
    label: 'label',
  },
  component: InitialInput,
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof InitialInput>;
export const Input: Story = {
  render: (args) => <InitialInput {...args} />,
};
