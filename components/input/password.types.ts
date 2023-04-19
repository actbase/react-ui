import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputPasswordCssPropsType = {};
export type InputPasswordType = ComponentType<InputPasswordCssPropsType>;

export interface InputPasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputPasswordType, InputPasswordCssPropsType> {
  // HTML Type
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputPasswordThemeType = ComponentTheme<
  InputPasswordType,
  InputPasswordCssPropsType
>;
