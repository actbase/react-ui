import type { Meta, StoryObj } from '@storybook/react';

import InitialCard from './card';

export default {
  title: 'DataDisplay/Card',
  component: InitialCard,
} satisfies Meta<typeof InitialCard>;

type Story = StoryObj<typeof InitialCard>;
export const Card: Story = {};
