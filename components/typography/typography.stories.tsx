import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import InitialTypography from './typography';

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
  component: InitialTypography,
} satisfies Meta<typeof InitialTypography>;

type Story = StoryObj<typeof InitialTypography>;
export const Typography: Story = {
  render: (args) => <InitialTypography {...args} />,
};

export const Heading: Story = {
  args: {
    el: 'h1',
    size: 32,
    weight: 700,
  },
  render: ({ el, size, weight }) => (
    <InitialTypography el={el} size={size} weight={weight}>
      Heading
    </InitialTypography>
  ),
};
