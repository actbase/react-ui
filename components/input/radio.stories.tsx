import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialRadio from './radio';

export default {
  title: 'Input',
  args: {
    name: 'name',
  },
  component: InitialRadio,
} satisfies Meta<typeof InitialRadio>;

type Story = StoryObj<typeof InitialRadio>;
export const Radio: Story = {
  render: (args) => <InitialRadio {...args} />,
};
