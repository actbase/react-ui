import type React from 'react';
import type { ElementProps, ElementThemeType } from '../element';

export type InputTextareaResizeType = boolean | 'horizontal' | 'vertical';
export interface InputTextareaProps<T extends string = string>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    ElementProps<T> {
  // resize
  resize?: InputTextareaResizeType;
}
export type InputTextareaThemeType<T extends string = string> =
  ElementThemeType<T> & {};
