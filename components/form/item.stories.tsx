import React from 'react';
import InitialFormItem from './item';
import Input from '../input';

export default {
  title: 'Form',
  component: InitialFormItem,
  args: {
    label: 'label',
    children: <Input placeholder="placeholder" />,
    error: 'error',
  },
};
export const Item = {};