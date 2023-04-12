import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialRadio from './radio';

export default {
  title: 'Radio',
  args: {
    label: 'label',
    name: 'name',
  },
  component: InitialRadio,
} satisfies Meta<typeof InitialRadio>;

type Story = StoryObj<typeof InitialRadio>;
export const Radio: Story = {
  render: (args) => <InitialRadio {...args} />,
};
