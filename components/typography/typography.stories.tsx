import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import UI from '../ui';

export default {
  title: 'General/Typography',
  args: {
    children: 'Typography',
    className: '',
    weight: 400,
    type: 'h1',
    size: 16,
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'text contents',
    },
    className: {
      name: 'className',
      description: 'css className',
    },
    weight: {
      name: 'weight',
      description: 'font-weight',
      control: {
        type: 'select',
      },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    size: {
      name: 'size',
      description: 'font-size',
    },
    el: {
      name: 'el',
      description: 'ReactElement. default tag is p',
    },
  },
  parameters: {
    controls: {
      exclude: ['css', 'type'],
    },
  },
  component: UI.Typography,
} satisfies Meta<typeof UI.Typography>;

type Story = StoryObj<typeof UI.Typography>;
export const Typography: Story = {
  render: (args) => <UI.Typography {...args} />,
};

export const Heading: Story = {
  args: {
    el: 'h1',
    size: 32,
    weight: 700,
  },
  render: ({ el, size, weight }) => (
    <UI.Typography el={el} size={size} weight={weight}>
      Heading
    </UI.Typography>
  ),
};
