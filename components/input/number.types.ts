import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputNumberCssPropsType = {};
export type InputNumberType = ComponentType<InputNumberCssPropsType>;

export interface InputNumberProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputNumberType, InputNumberCssPropsType> {
  // HTML Type
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputNumberThemeType = ComponentTheme<
  InputNumberType,
  InputNumberCssPropsType
>;
