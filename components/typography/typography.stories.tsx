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
    color: '#333',
  },
  argTypes: {
    children: {
      name: 'children',
      description:
        '타이포그래피 내부 텍스트입니다. `children`형태로 넘겨받습니다.',
    },
    className: {
      name: 'className',
      description:
        'css 클래스 명입니다. theme으로 지정된 스타일을 변경할 수 있습니다. `string`',
      table: { defaultValue: { summary: '' } },
    },
    weight: {
      name: 'weight',
      description: 'font-weight입니다.',
      control: {
        type: 'select',
      },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    size: {
      name: 'size',
      description: 'font-size입니다.',
    },
    el: {
      name: 'el',
      description: '`ReactElement`',
      table: { defaultValue: { summary: 'p' } },
    },
    color: {
      name: 'color',
      description: 'css color프로퍼티입니다.',
      control: 'color',
    },
    type: {
      name: 'type',
      description: 'theme으로 지정된 Typography의 타입을 설정합니다.',
    },
    css: {
      name: 'css',
      description: '인라인으로 지정하는 css 스타일입니다.',
    },
  },
  component: UI.Typography,
} satisfies Meta<typeof UI.Typography>;

type Story = StoryObj<typeof UI.Typography>;
export const Typography: Story = {
  render: (args) => <UI.Typography {...args} />,
};

/**
 * `el: 'h1', size: 32, weight: 700`의 제목 요소입니다.
 */
export const Heading: Story = {
  args: {
    el: 'h1',
    size: 32,
    weight: 700,
  },
};
