import React from 'react';
import InternalFormItem from './item';
import Input from '../input';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data Entry/Form',
  component: InternalFormItem,
  args: {
    label: 'label',
    error: 'error',
  },
} satisfies Meta<typeof InternalFormItem>;

type Story = StoryObj<typeof InternalFormItem>;
export const Item: Story = {
  render: (args) => (
    <InternalFormItem {...args}>
      <Input placeholder="placeholder" />
    </InternalFormItem>
  ),
};
