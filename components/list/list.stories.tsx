import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalList from './list';
import ListItem from './item';

export default {
  title: 'DataDisplay/List',
  component: InternalList,
} satisfies Meta<typeof InternalList>;

type Story = StoryObj<typeof InternalList>;
export const List: Story = {
  render: (args) => (
    <InternalList {...args}>
      <ListItem>ListItem</ListItem>
      <ListItem>ListItem</ListItem>
      <ListItem>ListItem</ListItem>
    </InternalList>
  ),
};
