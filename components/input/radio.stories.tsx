import type { Meta, StoryObj } from '@storybook/react';

import InternalRadio from './radio';

export default {
  title: 'Data Entry/Input',
  args: {
    className: '',
    type: '',
    children: 'radio',
    checked: true,
  },
  argTypes: {
    className: {
      name: 'className',
      description: 'css class name',
    },
    type: {
      name: 'type',
      description: 'type',
    },
    children: {
      name: 'text',
      description: 'string',
      defaultValue: '',
    },
    htmlType: {
      name: 'htmlType',
      description: 'html input type',
    },
    checked: {
      name: 'checked',
      description: 'boolean',
    },
  },
  component: InternalRadio,
} satisfies Meta<typeof InternalRadio>;

type Story = StoryObj<typeof InternalRadio>;
export const Radio: Story = {};
