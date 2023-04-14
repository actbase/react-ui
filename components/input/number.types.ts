import type { InputProps } from './input.types';
import type { ElementThemeType } from '../element';

export type InputNumberProps = InputProps;
export type InputNumberThemeType<T extends string = string> =
  ElementThemeType<T> & {};
