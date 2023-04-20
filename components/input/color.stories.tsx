import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InputColor from './color';

export default {
  title: 'Data Entry/Input',
  args: {},
  component: InputColor,
} satisfies Meta<typeof InputColor>;

type Story = StoryObj<typeof InputColor>;
export const Color: Story = {
  render: (args) => <InputColor {...args} />,
};
