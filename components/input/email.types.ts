import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputEmailCssPropsType = {};
export type InputEmailType = ComponentType<InputEmailCssPropsType>;

export interface InputEmailProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputEmailType, InputEmailCssPropsType> {
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputEmailThemeType = ComponentTheme<
  InputEmailType,
  InputEmailCssPropsType
> & {};
