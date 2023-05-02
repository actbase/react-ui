import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Feedback/Toast',
  component: UI.Toast,
} satisfies Meta<typeof UI.Toast>;

type Story = StoryObj<typeof UI.Toast>;
export const Toast: Story = {
  args: {
    children: 'toast !',
    css: '',
  },
  argTypes: {
    children: {
      name: 'message',
      description: 'message값을 패스하면 toast창의 메세지가 변합니다.',
      control: 'text',
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
    },
    type: {
      name: 'type',
      description: 'theme으로 지정된 타입을 설정합니다. `string`',
    },
    css: {
      name: 'css',
      description: '인라인으로 지정하는 css 스타일입니다.',
    },
  },
  render: ({ children }) => {
    return (
      <UI.Button
        type="primary"
        onClick={() => {
          if (typeof children === 'string') {
            UI.Toast.toast(children);
          }
        }}
      >
        Toast
      </UI.Button>
    );
  },
};
