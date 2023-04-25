import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Feedback/Toast',
  component: UI.Toast,
} satisfies Meta<typeof UI.Toast>;

type Story = StoryObj<typeof UI.Toast>;
export const Toast: Story = {
  render: () => {
    return (
      <UI.Button
        type="primary"
        onClick={() => {
          UI.Toast.toast('Toast !');
        }}
      >
        Toast
      </UI.Button>
    );
  },
};
