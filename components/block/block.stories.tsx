import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'General/Block',
  args: {
    children: 'Block',
    className: 'text block',
  },
  argTypes: {
    children: {
      name: 'children',
      description:
        '블록 내부 자식요소입니다. children형태로 내려받습니다. `ReactNode`',
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
    },
    el: {
      name: 'el',
      description: '기본 태그는 p입니다. `ReactElement`',
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
  component: UI.Block,
} satisfies Meta<typeof UI.Block>;

type Story = StoryObj<typeof UI.Block>;
export const Block: Story = {
  args: {},
  render: (args) => <UI.Block {...args} />,
};
