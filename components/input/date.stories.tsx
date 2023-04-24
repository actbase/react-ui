import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InputDate from './date';

export default {
  title: 'Data Entry/Input',
  args: {},
  component: InputDate,
} satisfies Meta<typeof InputDate>;

type Story = StoryObj<typeof InputDate>;
export const Date: Story = {
  render: (args) => <InputDate {...args} />,
};
