import type { InputProps } from './input.types';
import type { ElementThemeType } from '../element';

export type InputCheckboxProps = InputProps;
export type InputCheckboxLabelThemeType = Omit<ElementThemeType, 'type'> & {};
export type InputCheckboxInputThemeType = Omit<ElementThemeType, 'type'> & {};
export type InputCheckboxThemeType<T extends string = string> =
  ElementThemeType<T> & {
    input?: InputCheckboxInputThemeType;
    label?: InputCheckboxLabelThemeType;
  };
