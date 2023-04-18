import type React from 'react';
import { ElementProps, ElementThemeType } from '../element';

export interface ToastThemeProps {
  index?: number;
}

export interface ToastProps<T extends string = string>
  extends React.HTMLAttributes<HTMLDivElement>,
    ElementProps<T, ToastThemeProps> {
  children?: React.ReactNode;
  index?: number;
}

export type ToastThemeType<T extends string = string> = ElementThemeType<
  T,
  ToastThemeProps
> & {
  timeout?: number;
};
