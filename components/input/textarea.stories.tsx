import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalTextarea from './textarea';

export default {
  title: 'Data Entry/Input',
  args: {
    placeholder: 'Enter your textarea placeholder',
    resize: true,
    rows: 5,
    cols: 30,
  },
  component: InternalTextarea,
} satisfies Meta<typeof InternalTextarea>;

type Story = StoryObj<typeof InternalTextarea>;
export const TextArea: Story = {
  render: (args) => <InternalTextarea {...args} />,
};
