import { Meta, StoryObj } from '@storybook/react';
import InitialThemeProvider from './provider';

export default {
  title: 'Other/ThemeProvider',
  component: InitialThemeProvider,
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
} satisfies Meta<typeof InitialThemeProvider>;

type Story = StoryObj<typeof InitialThemeProvider>;
export const ThemeProvider: Story = {};
