import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type ButtonCssPropsType = {};
export type ButtonType = ComponentType<ButtonCssPropsType>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    ComponentProps<ButtonType, ButtonCssPropsType> {
  // HTML Type
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  // Radius
  radius?: number;
  // Loading
  loading?: boolean;
  // render a loading component when on loading
  renderLoadingComponent?: () => React.ReactNode;
}
export type ButtonThemeType = ComponentTheme<ButtonType, ButtonCssPropsType> & {
  // default render loading component
  renderLoadingComponent?: ButtonProps['renderLoadingComponent'];
};
