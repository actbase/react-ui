import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialButton from './button';

export default {
  title: 'Button',
  args: {
    children: 'children',
  },
  component: InitialButton,
} satisfies Meta<typeof InitialButton>;

type Story = StoryObj<typeof InitialButton>;
export const Button: Story = {
  render: (args) => <InitialButton {...args} />,
};
