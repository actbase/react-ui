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
    children: 'ListItem',
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'item내부에 표시할 내용을 `ReactNode`형태로 전달받습니다.',
    },
  },
  render: (args) => (
    <UI.List>
      <UI.List.Item>{args.children}</UI.List.Item>
    </UI.List>
  ),
};
