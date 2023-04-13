import type { ElementThemeType } from '../element';
import type { InputProps } from './input.types';

export type InputRadioProps = InputProps;
export type InputRadioInputThemeType = Omit<ElementThemeType, 'type'> & {};
export type InputRadioLabelThemeType = Omit<ElementThemeType, 'type'> & {};
export type InputRadioThemeType<T extends string = string> =
  ElementThemeType<T> & {
    // input
    input?: InputRadioInputThemeType;
    // label
    label?: InputRadioLabelThemeType;
  };
