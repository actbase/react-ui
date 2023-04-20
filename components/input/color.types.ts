import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputColorCssPropsType = {};
export type InputColorType = ComponentType<InputColorCssPropsType>;

export interface InputColorProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputColorType, InputColorCssPropsType> {
  // HTML Type
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputColorThemeType = ComponentTheme<
  InputColorType,
  InputColorCssPropsType
>;
