import type React from 'react';
import type { ElementProps, ElementThemeType } from '../element';

export interface ButtonProps<T extends string = string>
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    ElementProps<T> {
  // HTML Type
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  // Radius
  radius?: number;
  // Loading
  loading?: boolean;
  // render a loading component when on loading
  renderLoadingComponent?: () => React.ReactNode;
}

export type ButtonThemeType<T extends string = string> = ElementThemeType<T> & {
  // default render loading component
  renderLoadingComponent?: ButtonProps['renderLoadingComponent'];
};
