import type { InputProps } from './input.types';
import type { ElementThemeType } from '../element';

export type InputFileProps = InputProps;
export type InputFileThemeType<T extends string = string> =
  ElementThemeType<T> & {};
