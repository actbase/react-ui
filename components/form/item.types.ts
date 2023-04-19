import type React from 'react';
import type { FormValidateTimingType } from './form.types';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type FormItemCssPropsType = {};
export type FormItemType = ComponentType<FormItemCssPropsType>;

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
export type FormItemProps<T extends keyof JSX.IntrinsicElements = 'label'> =
  Omit<JSX.IntrinsicElements[T], 'label'> &
    ComponentProps<FormItemType, FormItemCssPropsType> & {
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
export type FormItemLabelThemeType = ComponentTheme;
export type FormItemErrorThemeType = ComponentTheme;
export type FormItemThemeType = ComponentTheme<
  FormItemType,
  FormItemCssPropsType
> & {
  // label
  label?: FormItemLabelThemeType;
  // error
  error?: FormItemErrorThemeType;
};
