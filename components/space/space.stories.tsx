import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialSpace from './space';
import Typography from '../typography';

export default {
  title: 'Layout/Space',
  component: InitialSpace,
} satisfies Meta<typeof InitialSpace>;

type Story = StoryObj<typeof InitialSpace>;
export const Space: Story = {
  render: (props) => (
    <InitialSpace {...props}>
      <Typography>Test1</Typography>
      <Typography>Test2</Typography>
      <Typography>Test3</Typography>
      <Typography>Test4</Typography>
    </InitialSpace>
  ),
};
