import { InputProps } from './input.types';
import { ElementThemeType } from '../element';

export type InputEmailProps = InputProps;
export type InputEmailThemeType<T extends string = string> =
  ElementThemeType<T> & {};
