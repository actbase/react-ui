import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InitialForm from './form';
import FormItem from './item';
import Input from '../input';
import Button from '../button';
import Space from '../space';

export default {
  title: 'Data Entry/Form',
  component: InitialForm,
  argTypes: {
    defaultValues: {
      type: {
        // @ts-ignore
        name: 'object',
        required: false,
      },
      description: 'Default values',
      defaultValue: undefined,
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
      description: 'Validates',
      defaultValue: undefined,
      control: {
        type: 'object',
      },
    },
    onSuccess: {
      type: {
        name: 'function',
        required: false,
      },
      description: 'callback when on success',
      defaultValue: undefined,
      control: {
        type: 'function',
      },
    },
  },
} satisfies Meta<typeof InitialForm>;

type Story = StoryObj<typeof InitialForm>;
export const Form: Story = {
  render: (args) => (
    <InitialForm
      onSubmit={(data) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(JSON.stringify(data)), 1500);
        });
      }}
      {...args}
    >
      <Space direction="vertical">
        <FormItem name="input" label="Input">
          <Input placeholder="Input" />
        </FormItem>
        <FormItem name="input_email" label="Input.Email">
          <Input.Email placeholder="Input.Email" />
        </FormItem>
        <FormItem name="input_password" label="Input.Password">
          <Input.Password placeholder="Input.Password" />
        </FormItem>
        <FormItem name="input_checkbox" label="Input.Checkbox">
          <Input.Checkbox>Input.Checkbox</Input.Checkbox>
        </FormItem>
        <FormItem el="div" label="Input.Checkbox">
          <Space direction="vertical" size={2}>
            <Input.Checkbox name="input_checkbox_1">
              Input.Checkbox 1
            </Input.Checkbox>
            <Input.Checkbox name="input_checkbox_2">
              Input.Checkbox 2
            </Input.Checkbox>
            <Input.Checkbox name="input_checkbox_3">
              Input.Checkbox 3
            </Input.Checkbox>
          </Space>
        </FormItem>
        <FormItem name="input_radio" label="Input.Radio">
          <Input.Radio>Input.Radio</Input.Radio>
        </FormItem>
        <FormItem el="div" label="Input.Radios">
          <Space direction="vertical" size={2}>
            <Input.Radio name="input_radios" value="1">
              Input.Radio 1
            </Input.Radio>
            <Input.Radio name="input_radios" value="2">
              Input.Radio 2
            </Input.Radio>
            <Input.Radio name="input_radios" value="3">
              Input.Radio 3
            </Input.Radio>
          </Space>
        </FormItem>
        <FormItem name="input_file" label="Input.File">
          <Input.File />
        </FormItem>
        <FormItem name="input_textarea" label="Input.Textarea">
          <Input.Textarea placeholder="Input.Textarea" rows={5} />
        </FormItem>
        <Space size={6} justify="end">
          <Button htmlType="reset" type="primary">
            Reset
          </Button>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Space>
      </Space>
    </InitialForm>
  ),
};
