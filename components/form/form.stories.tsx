import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UI from '../ui';

export default {
  title: 'Data Entry/Form',
  component: UI.Form,
  argTypes: {
    children: {
      name: 'children',
      description: '`React.ReactNode`',
    },
    prevent: {
      name: 'prevent',
      description: 'prevent event when on submit',
      type: {
        name: 'boolean',
        required: false,
      },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      name: 'loading',
      description: 'loading state',
      type: {
        name: 'boolean',
        required: false,
      },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    defaultValues: {
      type: {
        // @ts-ignore
        name: 'object',
        required: false,
      },
      description: 'Default values',
      defaultValue: undefined,
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: undefined },
      },
      control: {
        type: 'object',
      },
    },
    allowForceSubmit: {
      type: {
        name: 'boolean',
        required: false,
      },
      description: 'Allow force submit',
      defaultValue: false,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    validates: {
      type: {
        // @ts-ignore
        name: 'object',
        required: false,
      },
      description: 'Validates `object`',
      defaultValue: undefined,
      control: {
        type: 'object',
      },
    },
    validateTiming: {
      name: 'validateTiming',
      description: 'validate timing `ON_SUBMIT` | `ON_CHANGE`',
      control: {
        type: 'select',
      },
      options: ['ON_SUBMIT', 'ON_CHANGE'],
      defaultValue: undefined,
    },
    onSubmit: {
      type: {
        name: 'function',
        required: false,
      },
      description: 'callback when on submit  `function`',
      defaultValue: undefined,
      control: {
        type: 'function',
      },
    },
    onSuccess: {
      type: {
        name: 'function',
        required: false,
      },
      description: 'callback when on success `function`',
      defaultValue: undefined,
      control: {
        type: 'function',
      },
    },
    serialize: {
      type: {
        name: 'function',
        required: false,
      },
      description: 'serialize form data when on submit',
      defaultValue: undefined,
      control: {
        type: 'function',
      },
    },
  },
} satisfies Meta<typeof UI.Form>;

type Story = StoryObj<typeof UI.Form>;
export const Form: Story = {
  render: (args) => (
    <UI.Form
      onSubmit={(data) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(JSON.stringify(data)), 1500);
        });
      }}
      {...args}
    >
      <UI.Space direction="vertical" size={16}>
        <UI.Form.Item name="input" label="UI.Input">
          <UI.Input placeholder="Input" />
        </UI.Form.Item>
        <UI.Form.Item name="input_email" label="UI.Input.Email">
          <UI.Input.Email placeholder="Input.Email" />
        </UI.Form.Item>
        <UI.Form.Item name="input_password" label="UI.Input.Password">
          <UI.Input.Password placeholder="Input.Password" />
        </UI.Form.Item>
        <UI.Form.Item el="div" name="input_checkbox" label="UI.Input.Checkbox">
          <UI.Input.Checkbox>Input.Checkbox</UI.Input.Checkbox>
        </UI.Form.Item>
        <UI.Form.Item el="div" label="UI.Input.Checkbox">
          <UI.Space direction="vertical" size={2}>
            <UI.Input.Checkbox name="input_checkbox_1">
              UI.Input.Checkbox 1
            </UI.Input.Checkbox>
            <UI.Input.Checkbox name="input_checkbox_2">
              UI.Input.Checkbox 2
            </UI.Input.Checkbox>
            <UI.Input.Checkbox name="input_checkbox_3">
              UI.Input.Checkbox 3
            </UI.Input.Checkbox>
          </UI.Space>
        </UI.Form.Item>
        <UI.Form.Item name="input_radio" label="UI.Input.Radio">
          <UI.Input.Radio>Input.Radio</UI.Input.Radio>
        </UI.Form.Item>
        <UI.Form.Item el="div" label="UI.Input.Radios">
          <UI.Space direction="vertical" size={2}>
            <UI.Input.Radio name="input_radios" value="1">
              UI.Input.Radio 1
            </UI.Input.Radio>
            <UI.Input.Radio name="input_radios" value="2">
              UI.Input.Radio 2
            </UI.Input.Radio>
            <UI.Input.Radio name="input_radios" value="3">
              UI.Input.Radio 3
            </UI.Input.Radio>
          </UI.Space>
        </UI.Form.Item>
        <UI.Form.Item name="input_file" label="UI.Input.File">
          <UI.Input.File />
        </UI.Form.Item>
        <UI.Form.Item name="input_textarea" label="UI.Input.Textarea">
          <UI.Input.Textarea placeholder="Input.Textarea" rows={5} />
        </UI.Form.Item>
        <UI.Space size={6} justify="end">
          <UI.Button htmlType="reset" type="primary">
            Reset
          </UI.Button>
          <UI.Button htmlType="submit" type="primary">
            Submit
          </UI.Button>
        </UI.Space>
      </UI.Space>
    </UI.Form>
  ),
};
