import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputCheckboxCssPropsType = {};
export type InputCheckboxType = ComponentType<InputCheckboxCssPropsType>;

export interface InputCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputCheckboxType, InputCheckboxCssPropsType> {
  // HTML Type
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

export type InputCheckboxInputThemeType = ComponentTheme;
export type InputCheckboxLabelThemeType = ComponentTheme;
export type InputCheckboxThemeType = ComponentTheme<
  InputCheckboxType,
  InputCheckboxCssPropsType
> & {
  // input
  input?: InputCheckboxInputThemeType;
  // label
  label?: InputCheckboxLabelThemeType;
};
