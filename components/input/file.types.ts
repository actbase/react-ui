import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type InputFileCssPropsType = {};
export type InputFileType = ComponentType<InputFileCssPropsType>;

export interface InputFileProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    ComponentProps<InputFileType, InputFileCssPropsType> {
  htmlType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
export type InputFileThemeType = ComponentTheme<
  InputFileType,
  InputFileCssPropsType
> & {};
