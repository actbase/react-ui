import type { Meta, StoryObj } from '@storybook/react';
import UI from '../ui';

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
  component: UI.Input.Radio,
} satisfies Meta<typeof UI.Input.Radio>;

type Story = StoryObj<typeof UI.Input.Radio>;
export const Radio: Story = {};
