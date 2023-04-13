import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialFile from './file';

export default {
  title: 'Data Entry/Input',
  component: InitialFile,
} satisfies Meta<typeof InitialFile>;

type Story = StoryObj<typeof InitialFile>;
export const File: Story = {
  render: (args) => <InitialFile {...args} />,
};
