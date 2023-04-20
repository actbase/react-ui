import type { SerializedStyles } from '@emotion/utils';
import type React from 'react';
import type { ThemeColorType } from '../theme';

export type ComponentCssPropsType = Record<string, any>;

export interface ComponentThemeCssProps {
  color?: ThemeColorType;
}

export type ComponentCssType<T extends ComponentCssPropsType> =
  | SerializedStyles
  | string
  | ((props: ComponentThemeCssProps & T) => SerializedStyles | string);

export interface ComponentTypeProps<
  T extends ComponentCssPropsType = ComponentCssPropsType,
> {
  // className
  className?: string;
  // style
  style?: React.CSSProperties;
  // css
  css?: ComponentCssType<T>;
}

export type ComponentType<
  P extends ComponentCssPropsType = ComponentCssPropsType,
> = Record<string, ComponentTypeProps<P>>;

export interface ComponentProps<
  T extends ComponentType = ComponentType,
  P extends ComponentCssPropsType = ComponentCssPropsType,
> {
  // element type
  type?: keyof T;
  // css
  css?: ComponentCssType<P>;
}

export interface ComponentTheme<
  T extends ComponentType = ComponentType,
  P extends ComponentCssPropsType = ComponentCssPropsType,
> {
  // className
  className?: string;
  // style
  style?: React.CSSProperties;
  // css
  css?: ComponentCssType<P>;
  // type
  type?: T;
}
