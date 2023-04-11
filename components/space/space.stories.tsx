import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialSpace from './space';

export default {
  title: 'Space',
  component: InitialSpace,
} satisfies Meta<typeof Space>;

type Story = StoryObj<typeof InitialSpace>;
export const Space: Story = {
  render: (props) => (
    <InitialSpace {...props}>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </InitialSpace>
  ),
};
