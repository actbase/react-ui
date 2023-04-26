import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UI from '../ui';

export default {
  title: 'Data Entry/Form',
  component: UI.Form,
} satisfies Meta<typeof UI.Form>;

type Story = StoryObj<typeof UI.Form>;
export const Form: Story = {};

/**
 * Input요소는 placeholder를 통해 표시되는 문장을 수정할 수 있습니다.
 */
export const NormalInput: Story = {
  args: {
    placeholder: 'placeholder',
  },
  render: (args) => (
    <UI.Form {...args}>
      <UI.Form.Item name="input" label="Input">
        <UI.Input placeholder={args.placeholder} />
      </UI.Form.Item>
      <UI.Space size={6} justify="end">
        <UI.Button htmlType="reset" type="primary">
          Reset
        </UI.Button>
        <UI.Button htmlType="submit" type="primary">
          Submit
        </UI.Button>
      </UI.Space>
    </UI.Form>
  ),
};

/**
 * PasswordInput은 hidden값에 따라 비밀번호 표시 여부를 전환합니다.
 */
export const PasswordInput: Story = {
  args: {
    placeholder: 'placeholder',
    hidden: true,
  },
  render: (args) => (
    <UI.Form {...args}>
      <UI.Form.Item name="input" label="Input">
        <UI.Input placeholder={args.placeholder} hidden={args.hidden} />
      </UI.Form.Item>
      <UI.Space size={6} justify="end">
        <UI.Button htmlType="reset" type="primary">
          Reset
        </UI.Button>
        <UI.Button htmlType="submit" type="primary">
          Submit
        </UI.Button>
      </UI.Space>
    </UI.Form>
  ),
};

/**
 * Radio는 Item간 같은 name을 공유한다면 하나의 값만 선택할 수 있습니다.
 */
export const RadioInput: Story = {
  args: {},
  render: (args) => (
    <UI.Form {...args}>
      <UI.Form.Item el="div" label="InputRadios">
        <UI.Space direction="vertical" size={2}>
          <UI.Input.Radio name="input_radios" value="1">
            Radio 1
          </UI.Input.Radio>
          <UI.Input.Radio name="input_radios" value="2">
            Radio 2
          </UI.Input.Radio>
          <UI.Input.Radio name="input_radios" value="3">
            Radio 3
          </UI.Input.Radio>
        </UI.Space>
      </UI.Form.Item>
      <UI.Space size={6} justify="end">
        <UI.Button htmlType="reset" type="primary">
          Reset
        </UI.Button>
        <UI.Button htmlType="submit" type="primary">
          Submit
        </UI.Button>
      </UI.Space>
    </UI.Form>
  ),
};

/**
 * TextareaInput은 resize property를 통해 크기 조절여부를 지정할 수 있습니다.
 */
export const TextareaInput: Story = {
  args: {},
  render: (args) => (
    <UI.Form {...args}>
      <UI.Form.Item name="input_textarea" label="InputTextarea">
        <UI.Input.Textarea placeholder="Textarea" rows={5} resize />
      </UI.Form.Item>
      <UI.Space size={6} justify="end">
        <UI.Button htmlType="reset" type="primary">
          Reset
        </UI.Button>
        <UI.Button htmlType="submit" type="primary">
          Submit
        </UI.Button>
      </UI.Space>
    </UI.Form>
  ),
};

export const FormWithAllItems: Story = {
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
        <UI.Form.Item name="input" label="Input">
          <UI.Input placeholder="Input" />
        </UI.Form.Item>
        <UI.Form.Item name="input_email" label="InputEmail">
          <UI.Input.Email placeholder="Email" />
        </UI.Form.Item>
        <UI.Form.Item name="input_password" label="InputPassword">
          <UI.Input.Password placeholder="Password" />
        </UI.Form.Item>
        <UI.Form.Item el="div" name="input_checkbox" label="InputCheckbox">
          <UI.Input.Checkbox>Checkbox</UI.Input.Checkbox>
        </UI.Form.Item>
        <UI.Form.Item el="div" label="InputCheckbox">
          <UI.Space direction="vertical" size={2}>
            <UI.Input.Checkbox name="input_checkbox_1">
              Checkbox 1
            </UI.Input.Checkbox>
            <UI.Input.Checkbox name="input_checkbox_2">
              Checkbox 2
            </UI.Input.Checkbox>
            <UI.Input.Checkbox name="input_checkbox_3">
              Checkbox 3
            </UI.Input.Checkbox>
          </UI.Space>
        </UI.Form.Item>
        <UI.Form.Item name="input_radio" label="InputRadio">
          <UI.Input.Radio>Radio</UI.Input.Radio>
        </UI.Form.Item>
        <UI.Form.Item el="div" label="InputRadios">
          <UI.Space direction="vertical" size={2}>
            <UI.Input.Radio name="input_radios" value="1">
              Radio 1
            </UI.Input.Radio>
            <UI.Input.Radio name="input_radios" value="2">
              Radio 2
            </UI.Input.Radio>
            <UI.Input.Radio name="input_radios" value="3">
              Radio 3
            </UI.Input.Radio>
          </UI.Space>
        </UI.Form.Item>
        <UI.Form.Item name="input_file" label="InputFile">
          <UI.Input.File />
        </UI.Form.Item>
        <UI.Form.Item name="input_textarea" label="InputTextarea">
          <UI.Input.Textarea placeholder="Textarea" rows={5} />
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
