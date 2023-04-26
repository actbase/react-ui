import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Form',
  component: UI.Form.Item,
  args: {
    label: 'label',
    error: 'error',
  },
} satisfies Meta<typeof UI.Form.Item>;

type Story = StoryObj<typeof UI.Form.Item>;
export const Item: Story = {
  render: (args) => (
    <UI.Form.Item {...args}>
      <UI.Input placeholder="placeholder" />
    </UI.Form.Item>
  ),
};
