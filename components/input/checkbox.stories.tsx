import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialCheckbox from './checkbox';

export default {
  title: 'Input/Checkbox',
  args: {},
  component: InitialCheckbox,
} satisfies Meta<typeof InitialCheckbox>;

type Story = StoryObj<typeof InitialCheckbox>;
export const Checkbox: Story = {
  render: (args) => <InitialCheckbox {...args} />,
};
