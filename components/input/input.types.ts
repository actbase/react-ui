import type React from 'react';
import type { ElementProps, ElementThemeType } from '../element';

export interface InputProps<T extends string = string>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ElementProps<T> {
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputThemeType<T extends string = string> =
  ElementThemeType<T> & {};
