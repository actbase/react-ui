import type React from 'react';
import { SerializedStyles } from '@emotion/react';

export type ButtonType = Record<string, SerializedStyles>;
export type ButtonSizeType = Record<string, SerializedStyles>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  // HTML Type
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  // Type
  type?: keyof ButtonType;
  // Size
  size?: keyof ButtonSizeType;
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
  defaultType?: keyof ButtonType;
  // button types
  type?: ButtonType;
  // default button size
  defaultSize?: keyof ButtonSizeType;
  // button sizes
  size?: ButtonSizeType;
  // default render loading component
  renderLoadingComponent?: ButtonProps['renderLoadingComponent'];
};
