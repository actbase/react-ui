import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Layout/Space',
  component: UI.Space,
} satisfies Meta<typeof UI.Space>;

type Story = StoryObj<typeof UI.Space>;
export const Space: Story = {
  render: (props) => (
    <UI.Space {...props}>
      <UI.Typography>Test1</UI.Typography>
      <UI.Typography>Test2</UI.Typography>
      <UI.Typography>Test3</UI.Typography>
      <UI.Typography>Test4</UI.Typography>
    </UI.Space>
  ),
};
