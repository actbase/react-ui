import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputRadioCssPropsType = {};
export type InputRadioType = ComponentType<InputRadioCssPropsType>;

export interface InputRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputRadioType, InputRadioCssPropsType> {
  // HTML Type
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

export type InputRadioInputThemeType = ComponentTheme;
export type InputRadioLabelThemeType = ComponentTheme;
export type InputRadioThemeType = ComponentTheme<
  InputRadioType,
  InputRadioCssPropsType
> & {
  // input
  input?: InputRadioInputThemeType;
  // label
  label?: InputRadioLabelThemeType;
};
