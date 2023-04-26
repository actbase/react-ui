import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {
    hidden: true,
    placeholder: 'placeholder',
  },
  component: UI.Input.Password,
} satisfies Meta<typeof UI.Input.Password>;

type Story = StoryObj<typeof UI.Input.Password>;
export const Password: Story = {
  render: (args) => <UI.Input.Password {...args} />,
};
