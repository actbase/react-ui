import type { SerializedStyles } from '@emotion/utils';
import type { CSSProperties } from 'react';
import type { ThemeColorType } from '../theme';

export interface ElementTypeProps {
  // className
  className?: string;
  // style
  style?: CSSProperties;
  // css
  css?: SerializedStyles;
}

export type ElementsType<T extends string = string> = Record<
  T,
  ElementTypeProps
>;
export type ElementType<T extends string = string> = keyof ElementsType<T>;

export interface ElementThemeCssProps {
  color?: ThemeColorType;
}

export type ElementThemeCssType<T = Record<any, any>> =
  | SerializedStyles
  | ((props: ElementThemeCssProps & T) => SerializedStyles);

export interface ElementProps<T extends string = string, P = Record<any, any>> {
  // element type
  type?: ElementType<T>;
  // css
  css?: ElementThemeCssType<P>;
}

export type ElementThemeType<
  T extends string = string,
  P = Record<any, any>,
> = {
  // className
  className?: string;
  // style
  style?: CSSProperties;
  // css
  css?: ElementThemeCssType<P>;
  // type
  type?: ElementsType<T>;
};
