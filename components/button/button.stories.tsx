import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'General/Button',
  args: {
    type: 'primary',
    children: 'button',
  },
  argTypes: {
    type: {
      name: 'type',
      description: 'theme으로 지정된 버튼의 타입을 설정합니다. `string`',
    },
    children: {
      name: 'children',
      description: '버튼 내부 텍스트입니다. `children`형태로 넘겨받습니다.',
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
      control: {
        type: 'text',
      },
    },
    htmlType: {
      name: 'htmlType',
      description:
        'html의 type attribute와 동일합니다. `submit` `button` `reset`',
      control: {
        type: 'select',
      },
      options: ['submit', 'reset', 'button'],
    },
    radius: {
      name: 'radius',
      description: '버튼의 border-radius값을 조절합니다. `number`',
      control: {
        type: 'text',
      },
    },
    loading: {
      name: 'loading',
      description: '버튼의 loading여부를 나타냅니다. `boolean`',
      type: 'boolean',
      default: false,
    },
    disabled: {
      name: 'disabled',
      description: '버튼의 disabled여부를 전달합니다 `boolean`',
      type: 'boolean',
      default: false,
    },
    renderLoadingComponent: {
      name: 'renderLoadingComponent',
      description:
        'loading 상태일 때 버튼 내부에 넘겨받은 `ReactNode`요소를 렌더링합니다.',
    },
  },
  component: UI.Button,
} satisfies Meta<typeof UI.Button>;

type Story = StoryObj<typeof UI.Button>;

export const Button: Story = {
  render: (args) => <UI.Button {...args} />,
};

/**
 * loading, 혹은 disabled를 props로 전달하면 버튼이 비활성화됩니다.
 */
export const Disabled: Story = {
  args: {
    loading: true,
    disabled: true,
  },
};

/**
 * `ReactNode`를 renderLoadingComponent에 전달하면 버튼 안에 렌더링합니다.
 */
export const RenderComponent: Story = {
  args: {
    renderLoadingComponent: () => {
      return <div>rendering...</div>;
    },
  },
};
