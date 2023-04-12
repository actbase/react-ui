import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialFile from './file';

export default {
  title: 'Input/File',
  component: InitialFile,
} satisfies Meta<typeof InitialFile>;

type Story = StoryObj<typeof InitialFile>;
export const File: Story = {
  render: (args) => <InitialFile {...args} />,
};
