import type { Meta, StoryObj } from '@storybook/react';

import InternalRadio from './radio';

export default {
  title: 'Data Entry/Input',
  args: {
    children: 'Radio',
  },
  component: InternalRadio,
} satisfies Meta<typeof InternalRadio>;

type Story = StoryObj<typeof InternalRadio>;
export const Radio: Story = {};
