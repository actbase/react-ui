import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Button from '../button';
import InternalToast from './index';

export default {
  title: 'Feedback/Toast',
  component: InternalToast,
} satisfies Meta<typeof InternalToast>;

type Story = StoryObj<typeof InternalToast>;
export const Toast: Story = {
  render: () => {
    return (
      <Button
        type="primary"
        onClick={() => {
          InternalToast.toast('Toast !');
        }}
      >
        Toast
      </Button>
    );
  },
};
