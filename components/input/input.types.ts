import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputCssPropsType = {};
export type InputType = ComponentType<InputCssPropsType>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputType, InputCssPropsType> {
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputThemeType = ComponentTheme<InputType, InputCssPropsType> & {};
