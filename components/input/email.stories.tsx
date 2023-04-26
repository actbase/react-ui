import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {
    placeholder: 'placeholder',
  },
  component: UI.Input.Email,
} satisfies Meta<typeof UI.Input.Email>;

type Story = StoryObj<typeof UI.Input.Email>;
export const Email: Story = {
  render: (args) => <UI.Input.Email {...args} />,
};
