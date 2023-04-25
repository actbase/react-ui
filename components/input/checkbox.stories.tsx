import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {
    children: 'checkbox',
  },
  component: UI.Input.Checkbox,
} satisfies Meta<typeof UI.Input.Checkbox>;

type Story = StoryObj<typeof UI.Input.Checkbox>;
export const Checkbox: Story = {
  render: (args) => <UI.Input.Checkbox {...args} />,
};
