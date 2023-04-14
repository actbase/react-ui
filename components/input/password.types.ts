import { InputProps } from './input.types';
import { ElementThemeType } from '../element';

export interface InputPasswordProps extends InputProps {
  // hidden
  hidden?: boolean;
}
export type InputPasswordThemeType<T extends string = string> =
  ElementThemeType<T> & {};
