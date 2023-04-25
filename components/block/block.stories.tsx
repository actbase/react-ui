import type { Meta, StoryObj } from '@storybook/react';
import UI from '../ui';

export default {
  title: 'General/Block',
  component: UI.Block,
} satisfies Meta<typeof UI.Block>;

type Story = StoryObj<typeof UI.Block>;
export const Block: Story = {};
