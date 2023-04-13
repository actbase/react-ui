import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalCheckbox from './checkbox';

export default {
  title: 'Data Entry/Input',
  args: {
    children: 'Checkbox',
  },
  component: InternalCheckbox,
} satisfies Meta<typeof InternalCheckbox>;

type Story = StoryObj<typeof InternalCheckbox>;
export const Checkbox: Story = {
  render: (args) => <InternalCheckbox {...args} />,
};
