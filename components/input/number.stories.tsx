import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalInputNumber from './number';

export default {
  title: 'Data Entry/Input',
  args: {
    hidden: true,
    placeholder: 'placeholder',
  },
  component: InternalInputNumber,
} satisfies Meta<typeof InternalInputNumber>;

type Story = StoryObj<typeof InternalInputNumber>;
export const Number: Story = {
  render: (args) => <InternalInputNumber {...args} />,
};
