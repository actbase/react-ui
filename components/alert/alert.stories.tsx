import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';
import Button from '../button';

export default {
  title: 'Feedback/Alert',
  component: UI.Alert,
} satisfies Meta<typeof UI.Alert>;

type Story = StoryObj<typeof UI.Alert>;
export const Alert: Story = {
  render: () => {
    return (
      <Button
        type="primary"
        onClick={() => {
          UI.Alert.alert('Alert !', {
            title: 'alert',
          });
        }}
      >
        Alert
      </Button>
    );
  },
};
