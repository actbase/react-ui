import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InternalCard from './card';
import Typography from '../typography';

export default {
  title: 'DataDisplay/Card',
  component: InternalCard,
} satisfies Meta<typeof InternalCard>;

type Story = StoryObj<typeof InternalCard>;
export const Card: Story = {
  render: (args) => (
    <InternalCard {...args}>
      <Typography className="card__title">Card Title</Typography>
      <Typography className="card__contents">Card Contents</Typography>
    </InternalCard>
  ),
};
