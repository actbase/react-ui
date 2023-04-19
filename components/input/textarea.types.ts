import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputTextareaCssPropsType = {};
export type InputTextareaType = ComponentType<InputTextareaCssPropsType>;

export type InputTextareaResizeType = boolean | 'horizontal' | 'vertical';
export interface InputTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    ComponentProps<InputTextareaType, InputTextareaCssPropsType> {
  // resize
  resize?: InputTextareaResizeType;
}
export type InputTextareaThemeType = ComponentTheme<
  InputTextareaType,
  InputTextareaCssPropsType
>;
