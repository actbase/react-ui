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
      <p>Test1</p>
      <p>Test2</p>
      <p>Test3</p>
      <p>Test4</p>
    </InitialSpace>
  ),
};
