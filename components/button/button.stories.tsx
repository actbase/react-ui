import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialButton from './button';

export default {
  title: 'General/Button',
  args: {
    className: '',
    children: 'children',
    type: 'primary',
    htmlType: 'button',
  },
  argTypes: {
    className: {
      name: 'className',
      description: 'string',
    },
    htmlType: {
      name: 'htmlType',
      description: 'html button type',
      control: {
        type: 'select',
      },
      options: ['submit', 'reset', 'button'],
    },
  },
  component: InitialButton,
} satisfies Meta<typeof InitialButton>;

type Story = StoryObj<typeof InitialButton>;
export const Button: Story = {
  render: (args) => <InitialButton {...args} />,
};
