import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../../component';

export type InputSelectCssPropsType = {};
export type InputSelectType = ComponentType<InputSelectCssPropsType>;

export interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    ComponentProps<InputSelectType, InputSelectCssPropsType> {}

export type InputSelectThemeType = ComponentTheme<
  InputSelectType,
  InputSelectCssPropsType
>;
