import { Meta, StoryObj } from '@storybook/react';
import UI from '../ui';

export default {
  title: 'Other/ThemeProvider',
  component: UI.Theme.Provider,
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
} satisfies Meta<typeof UI.Theme.Provider>;

type Story = StoryObj<typeof UI.Theme.Provider>;
export const ThemeProvider: Story = {};
