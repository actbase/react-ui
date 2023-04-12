import type React from 'react';
import { SerializedStyles } from '@emotion/react';

export type ButtonType = string;
export type ButtonSizeType = string;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  // HTML Type
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  // Type
  type?: ButtonType;
  // Size
  size?: ButtonSizeType;
  // Radius
  radius?: number;
  // Loading
  loading?: boolean;
  // render a loading component when on loading
  renderLoadingComponent?: () => React.ReactNode;
}

export type ButtonThemeType = {
  // default button style
  style?: SerializedStyles;
  // default button radius
  radius?: ButtonProps['radius'];
  // default button type
  defaultType?: ButtonType;
  // button types
  type?: Record<ButtonType, SerializedStyles>;
  // default button size
  defaultSize?: ButtonSizeType;
  // button sizes
  size?: Record<ButtonSizeType, SerializedStyles>;
  // default render loading component
  renderLoadingComponent?: ButtonProps['renderLoadingComponent'];
};
