import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {},
  component: UI.Input.Color,
} satisfies Meta<typeof UI.Input.Color>;

type Story = StoryObj<typeof UI.Input.Color>;
export const Color: Story = {
  render: (args) => <UI.Input.Color {...args} />,
};
