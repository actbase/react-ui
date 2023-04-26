import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {
    placeholder: 'placeholder',
  },
  component: UI.Input.Input,
} satisfies Meta<typeof UI.Input.Input>;

type Story = StoryObj<typeof UI.Input.Input>;
export const Input: Story = {
  render: (args) => <UI.Input.Input {...args} />,
};
