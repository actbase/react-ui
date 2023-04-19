import type React from 'react';
import type {
  ComponentType,
  ComponentProps,
  ComponentTheme,
} from '../component';

export type ToastCssPropsType = {
  index?: number;
};
export type ToastType = ComponentType<ToastCssPropsType>;

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentProps<ToastType, ToastCssPropsType> {
  index?: number;
  timeout?: number;
}

export type ToastThemeType = ComponentTheme<ToastType, ToastCssPropsType> & {
  timeout?: number;
};
