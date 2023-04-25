import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialButton from './button';

export default {
  title: 'General/Button',
  args: {
    type: 'primary',
    children: 'button',
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

/**
 * htmlType은 button의 type attribute와 동일합니다. `submit` `button` `reset`
 */
export const HtmlType: Story = {
  args: {
    htmlType: 'submit',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <InitialButton {...args} />
      <InitialButton {...args} htmlType="button" />
      <InitialButton {...args} htmlType="reset" />
    </div>
  ),
};

/**
 * loading, 혹은 disabled 상태에 따라 버튼을 비활성화할 수 있습니다.
 */
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

/**
 * renderLoadingComponent를 props로 전달하면 해당 ReactNode를 버튼 안에 렌더링합니다.
 */
export const RenderComponent: Story = {
  args: {
    type: 'primary',
    loading: true,
    renderLoadingComponent: () => <div>rendering...</div>,
  },
  render: (args) => <InitialButton {...args}>loading</InitialButton>,
};
