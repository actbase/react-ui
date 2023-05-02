import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'DataDisplay/List',
  component: UI.List,
  args: {
    type: 'red',
  },
} satisfies Meta<typeof UI.List>;

type Story = StoryObj<typeof UI.List>;

/**
 * List.Item을 children으로 받아 List component내부에 렌더링합니다.
 */
export const List: Story = {
  args: {
    el: 'ul',
  },
  argTypes: {
    el: {
      name: 'list',
      description: 'ListItem을 감쌀 html tag입니다. 기본값은 `ul`입니다.',
      control: 'radio',
      options: ['ul', 'div'],
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
    <UI.List {...args}>
      <UI.List.Item>ListItem</UI.List.Item>
      <UI.List.Item>ListItem</UI.List.Item>
      <UI.List.Item>ListItem</UI.List.Item>
    </UI.List>
  ),
};
