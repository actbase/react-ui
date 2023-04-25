import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  component: UI.Input.File,
} satisfies Meta<typeof UI.Input.File>;

type Story = StoryObj<typeof UI.Input.File>;
export const File: Story = {
  render: (args) => <UI.Input.File {...args} />,
};
