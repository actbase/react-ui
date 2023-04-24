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
    radius: 0,
  },
  argTypes: {
    className: {
      name: 'css className',
      description: 'string',
    },
    htmlType: {
      name: 'htmlType',
      description: 'type of a button is exposed on the component',
      control: {
        type: 'select',
      },
      options: ['submit', 'reset', 'button'],
    },
    radius: {
      name: 'radius',
      description: 'border-radius value',
    },
    loading: {
      name: 'loading',
      description: 'describe button loading state `boolean`',
      type: 'boolean',
      default: false,
    },
    disabled: {
      name: 'disabled',
      description: 'describe button disabled state `boolean`',
      type: 'boolean',
      default: false,
    },
  },
  component: InitialButton,
} satisfies Meta<typeof InitialButton>;

type Story = StoryObj<typeof InitialButton>;
export const Button: Story = {
  render: (args) => <InitialButton {...args} />,
};
