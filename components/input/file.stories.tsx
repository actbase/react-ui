import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalFile from './file';

export default {
  title: 'Data Entry/Input',
  component: InternalFile,
} satisfies Meta<typeof InternalFile>;

type Story = StoryObj<typeof InternalFile>;
export const File: Story = {
  render: (args) => <InternalFile {...args} />,
};
