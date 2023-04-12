import React from 'react';
import { Meta } from '@storybook/react';
import InitialForm from './form';
import FormItem from './item';
import Input from '../input';
import Button from '../button';
import Space from '../space';

export default {
  title: 'Form',
  component: InitialForm,
  args: {
    onSubmit: () => {
      return new Promise((_resolve, reject) => {
        setTimeout(
          () =>
            reject({
              username: 'Error Username',
              password: 'Error Password',
            }),
          3000,
        );
      });
    },
    defaultValues: {
      username: 'default_username',
      password: 'default_password',
    },
    children: (
      <Space direction="vertical">
        <FormItem name="username" label="username">
          <Input placeholder="username" />
        </FormItem>
        <FormItem
          name="password"
          label="password"
          validate={{
            rules: [
              {
                validate: (value) => {
                  return value.length > 5;
                },
                message: 'Check your password',
              },
            ],
          }}
        >
          <Input placeholder="password" />
        </FormItem>
        <Space justify="end">
          <Button htmlType="reset" type="primary">
            Reset
          </Button>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Space>
      </Space>
    ),
  },
} satisfies Meta<typeof InitialForm>;
export const Form = {};
