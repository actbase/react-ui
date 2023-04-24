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
      name: 'className',
      description: 'css className `string`',
    },
    htmlType: {
      name: 'htmlType',
      description:
        'The type of button matching the HTML "type" attribute on the  tag',
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
    renderLoadingComponent: {
      name: 'renderLoadingComponent',
      description: 'render component while loading',
    },
  },
  component: InitialButton,
} satisfies Meta<typeof InitialButton>;

type Story = StoryObj<typeof InitialButton>;

export const Button: Story = {
  render: (args) => <InitialButton {...args} />,
};

export const Loading: Story = {
  args: {
    type: 'primary',
    loading: true,
  },
  render: (args) => <InitialButton {...args} />,
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    disabled: true,
  },
  render: (args) => <InitialButton {...args}>disabled</InitialButton>,
};

export const RenderComponent: Story = {
  args: {
    type: 'primary',
    loading: true,
    renderLoadingComponent: () => <div>rendering...</div>,
  },
  render: (args) => <InitialButton {...args}>loading</InitialButton>,
};
