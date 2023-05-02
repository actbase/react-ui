import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'General/Table',
  component: UI.Table,
} satisfies Meta<typeof UI.Table>;

type Story = StoryObj<typeof UI.Table>;

/**
 * Col요소는 `td` Row요소는 `tr`tag입니다.
 */
export const Table: Story = {
  args: { children: 'cell', className: 'className' },
  argTypes: {
    children: {
      name: 'children',
      description:
        'Table tag 내부 자식요소입니다. Row와 Col tag를  children형태로 내려받습니다. `ReactNode`',
      table: { defaultValue: { summary: 'ReactNode' } },
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
    },
    type: {
      name: 'type',
      description: 'Theme에 규정된 타입 또는 인라인 스타일을 사용합니다.',
    },
    style: {
      name: 'style',
      description: 'Theme에 규정된 스타일 또는 인라인 스타일을 사용합니다.',
    },
    css: {
      name: 'css',
      description: 'Theme에 규정된 css 또는 인라인 스타일을 사용합니다.',
    },
  },
  render: (args) => (
    <UI.Table {...args}>
      <UI.Table.Row>
        <UI.Space size={12} justify="center">
          <UI.Table.Col>{args.children}</UI.Table.Col>
          <UI.Table.Col>{args.children}</UI.Table.Col>
        </UI.Space>
      </UI.Table.Row>
      <UI.Table.Row>
        <UI.Space size={12} justify="center">
          <UI.Table.Col>{args.children}</UI.Table.Col>
          <UI.Table.Col>{args.children}</UI.Table.Col>
        </UI.Space>
      </UI.Table.Row>
    </UI.Table>
  ),
};
