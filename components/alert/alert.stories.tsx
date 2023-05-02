import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';
import Button from '../button';

export default {
  title: 'Feedback/Alert',
  component: UI.Alert,
} satisfies Meta<typeof UI.Alert>;

type Story = StoryObj<typeof UI.Alert>;

/**
 *  버튼의 onClick event에 `() => Alert.alert(message, options)` callback을 전달하여 호출할 수 있습니다.
 */
export const Alert: Story = {
  args: {
    children: 'alert !',
    css: '',
  },
  argTypes: {
    children: {
      name: 'message',
      description: 'message값을 패스하면 alert창의 메세지가 변합니다.',
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
    template: {
      name: 'template',
      description:
        'theme에 저장된 스타일이 아니라 전달받은 template형태대로 렌더링되는 callback함수입니다.',
    },
  },
  render: ({ children }) => {
    return (
      <Button
        type="primary"
        onClick={() => {
          UI.Alert.alert(children, {
            title: 'alert',
          });
        }}
      >
        Alert
      </Button>
    );
  },
};
