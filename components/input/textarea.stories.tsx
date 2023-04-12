import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialTextarea from './textarea';

export default {
  title: 'Input',
  args: {
    placeholder: 'Enter your textarea placeholder',
    resize: false,
    rows: 5,
    cols: 30,
  },
  component: InitialTextarea,
} satisfies Meta<typeof InitialTextarea>;

type Story = StoryObj<typeof InitialTextarea>;
export const TextArea: Story = {
  render: (args) => <InitialTextarea {...args} />,
};
