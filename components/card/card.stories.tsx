import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'DataDisplay/Card',
  component: UI.Card,
} satisfies Meta<typeof UI.Card>;

type Story = StoryObj<typeof UI.Card>;
export const Card: Story = {
  render: (args) => (
    <UI.Card {...args}>
      <UI.Typography className="card__title">Card Title</UI.Typography>
      <UI.Typography className="card__contents">Card Contents</UI.Typography>
    </UI.Card>
  ),
};
