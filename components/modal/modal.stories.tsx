import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'Feedback/Modal',
  component: UI.Modal,
} satisfies Meta<typeof UI.Modal>;

type Story = StoryObj<typeof UI.Modal>;
export const Modal: Story = {
  render: () => {
    return (
      <UI.Button
        type="primary"
        onClick={() => {
          UI.Modal.modal({
            render: () => <div>Modal Test</div>,
          });
        }}
      >
        Show Modal
      </UI.Button>
    );
  },
};
