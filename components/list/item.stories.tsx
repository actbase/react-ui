import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'DataDisplay/List',
  component: UI.List.Item,
} satisfies Meta<typeof UI.List.Item>;

type Story = StoryObj<typeof UI.List.Item>;
export const Item: Story = {
  render: (args) => (
    <UI.List>
      <UI.List.Item {...args}>ListItem</UI.List.Item>
    </UI.List>
  ),
};
