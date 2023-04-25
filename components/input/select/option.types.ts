import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../../component';

export type InputSelectOptionCssPropsType = {};
export type InputSelectOptionType =
  ComponentType<InputSelectOptionCssPropsType>;

export interface InputSelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement>,
    ComponentProps<InputSelectOptionType, InputSelectOptionCssPropsType> {}

export type InputSelectOptionThemeType = ComponentTheme<
  InputSelectOptionType,
  InputSelectOptionCssPropsType
>;
