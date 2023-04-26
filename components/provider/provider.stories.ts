import { Meta, StoryObj } from '@storybook/react';
import UI from '../ui';

export default {
  title: 'Other/Provider',
  component: UI.Provider,
  argTypes: {
    theme: {
      type: {
        // @ts-ignore
        name: 'object',
        required: false,
      },
      description: 'Theme Object',
      defaultValue: undefined,
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof UI.Provider>;

type Story = StoryObj<typeof UI.Provider>;
export const Provider: Story = {};
