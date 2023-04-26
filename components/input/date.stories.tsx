import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {},
  component: UI.Input.Date,
} satisfies Meta<typeof UI.Input.Date>;

type Story = StoryObj<typeof UI.Input.Date>;
export const Date: Story = {
  render: (args) => <UI.Input.Date {...args} />,
};
