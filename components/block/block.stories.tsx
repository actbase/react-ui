import type { Meta, StoryObj } from '@storybook/react';

import InitialBlock from './block';

export default {
  title: 'General/Block',
  component: InitialBlock,
} satisfies Meta<typeof InitialBlock>;

type Story = StoryObj<typeof InitialBlock>;
export const Block: Story = {};
