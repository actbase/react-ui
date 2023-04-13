import type React from 'react';
import { SerializedStyles } from '@emotion/react';
import { FormValidateTimingType } from './form.types';

export type FormItemValidateType = {
  rules: {
    validate: (value: string) => boolean | string | Promise<boolean | string>;
    message?: React.ReactNode;
    timing?: FormValidateTimingType;
  }[];
};

export type FormItemErrorStatusType = 'READY' | 'PENDING' | 'DONE' | 'ERROR';
export type FormItemErrorValueType = {
  status: FormItemErrorStatusType;
  message?: React.ReactNode;
};
export type FormItemErrorType = Record<string, FormItemErrorValueType>;

export interface FormItemHandle {
  validate: () => void;
}
export type FormItemRef = React.ForwardedRef<FormItemHandle>;

export type FormItemProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'label'
> & {
  // element
  el?: T;
  // label
  label?: React.ReactNode;
  // error
  error?: React.ReactNode;
  // name
  name?: string;
  // default value
  defaultValue?: string;
  // default checked
  defaultChecked?: boolean;
  // validate
  validate?: FormItemValidateType;
  // reset error when on change
  resetErrorOnChange?: boolean;
  // inline
  inline?: boolean;
};

export type FormItemThemeType = {
  // style
  style?: SerializedStyles;
  // label
  label?: {
    // style
    style?: SerializedStyles;
  };
  // error
  error?: {
    // style
    style?: SerializedStyles;
  };
};
