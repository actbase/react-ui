import { Meta, StoryObj } from '@storybook/react';
import InternalProvider from './provider';

export default {
  title: 'Other/Provider',
  component: InternalProvider,
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
} satisfies Meta<typeof InternalProvider>;

type Story = StoryObj<typeof InternalProvider>;
export const Provider: Story = {};
