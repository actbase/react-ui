import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'DataDisplay/List',
  component: UI.List.Item,
} satisfies Meta<typeof UI.List.Item>;

type Story = StoryObj<typeof UI.List.Item>;

export const Item: Story = {
  args: {
    el: 'li',
    children: 'ListItem',
  },
  argTypes: {
    el: {
      name: 'ListItem',
      description: 'ListItem html tag입니다. 기본값은 `li`입니다.',
      control: 'radio',
      options: ['li'],
    },
    children: {
      name: 'children',
      description: 'item내부에 표시할 내용을 `ReactNode`형태로 전달받습니다.',
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
    },
    style: {
      name: 'style',
      description: 'Theme에 규정된 타입 또는 인라인 스타일을 사용합니다.',
    },
    htmlType: {
      name: 'htmlType',
      description: 'el tag에 따라 html type attribute를 지정합니다. `string`',
    },
    type: {
      name: 'type',
      description: 'theme으로 지정된 타입을 설정합니다. `string`',
    },
  },
  render: (args) => (
    <UI.List>
      <UI.List.Item>{args.children}</UI.List.Item>
    </UI.List>
  ),
};
