import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Feedback/Modal',
  component: UI.Modal,
} satisfies Meta<typeof UI.Modal>;

/**
 * 버튼의 onClick event에 `() => Modal.modal({ render: () => React.ReactNode }` callback을 전달하여 호출할 수 있습니다.
 */
type Story = StoryObj<typeof UI.Modal>;
export const Modal: Story = {
  args: {
    children: 'Modal Test',
  },
  argTypes: {
    children: {
      name: 'render',
      description:
        '{ render: () => React.ReactNode }형태로 ReactNode를 반환하여 modal내용을 수정합니다.',
    },
    onDestroy: {
      name: 'onDestroy',
      description:
        'Modal close의 동작을 바꾸기 위해 직접 onDestroy함수를 전달할 수 있습니다. `function`',
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
    },
    template: {
      name: 'template',
      description:
        '새로 template을 생성하거나 theme에 정의된 template를 사용할 수 있습니다. `function`',
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
  render: (args) => {
    return (
      <UI.Button
        type="primary"
        onClick={() => {
          UI.Modal.modal({
            render: () => <div>{args.children}</div>,
          });
        }}
      >
        Show Modal
      </UI.Button>
    );
  },
};
