import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputDateCssPropsType = {};
export type InputDateType = ComponentType<InputDateCssPropsType>;

export interface InputDateProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputDateType, InputDateCssPropsType> {
  // HTML Type
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputDateThemeType = ComponentTheme<
  InputDateType,
  InputDateCssPropsType
>;
