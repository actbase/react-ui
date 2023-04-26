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
export const List: Story = {
  render: (args) => (
    <UI.List {...args}>
      <UI.List.Item>ListItem</UI.List.Item>
      <UI.List.Item>ListItem</UI.List.Item>
      <UI.List.Item>ListItem</UI.List.Item>
    </UI.List>
  ),
};
