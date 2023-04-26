import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {
    hidden: true,
    placeholder: 'placeholder',
  },
  component: UI.Input.Number,
} satisfies Meta<typeof UI.Input.Number>;

type Story = StoryObj<typeof UI.Input.Number>;
export const Number: Story = {
  render: (args) => <UI.Input.Number {...args} />,
};
