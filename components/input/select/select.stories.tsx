import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../../ui';

export default {
  title: 'Data Entry/Input',
  component: UI.Input.Select,
} satisfies Meta<typeof UI.Input.Select>;

type Story = StoryObj<typeof UI.Input.Select>;
export const Select: Story = {
  render: (args) => (
    <UI.Input.Select placeholder="Options" {...args}>
      <UI.Input.Select.Option value="option_1">Option 1</UI.Input.Select.Option>
      <UI.Input.Select.Option value="option_2">Option 2</UI.Input.Select.Option>
      <UI.Input.Select.Option value="option_3">Option 3</UI.Input.Select.Option>
    </UI.Input.Select>
  ),
};
