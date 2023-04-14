import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalListItem from './item';
import List from './list';

export default {
  title: 'DataDisplay/List',
  component: InternalListItem,
} satisfies Meta<typeof InternalListItem>;

type Story = StoryObj<typeof InternalListItem>;
export const Item: Story = {
  render: (args) => (
    <List>
      <InternalListItem {...args}>ListItem</InternalListItem>
    </List>
  ),
};
