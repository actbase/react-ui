import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Data Entry/Input',
  args: {
    placeholder: 'placeholder',
    resize: true,
    rows: 5,
    cols: 30,
  },
  component: UI.Input.Textarea,
} satisfies Meta<typeof UI.Input.Textarea>;

type Story = StoryObj<typeof UI.Input.Textarea>;
export const Textarea: Story = {
  render: (args) => <UI.Input.Textarea {...args} />,
};
