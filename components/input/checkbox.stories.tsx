import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialCheckbox from './checkbox';

export default {
  title: 'Data Entry/Input',
  args: {},
  component: InitialCheckbox,
} satisfies Meta<typeof InitialCheckbox>;

type Story = StoryObj<typeof InitialCheckbox>;
export const Checkbox: Story = {
  render: (args) => <InitialCheckbox {...args} />,
};
