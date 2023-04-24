import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Button from '../button';
import InternalAlert from './index';

export default {
  title: 'Feedback/Alert',
  component: InternalAlert,
} satisfies Meta<typeof InternalAlert>;

type Story = StoryObj<typeof InternalAlert>;
export const Alert: Story = {
  render: () => {
    return (
      <Button
        type="primary"
        onClick={() => {
          InternalAlert.alert('Alert !', {
            title: 'alert',
          });
        }}
      >
        Alert
      </Button>
    );
  },
};
