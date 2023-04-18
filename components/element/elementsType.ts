import type { SerializedStyles } from '@emotion/utils';
import type { CSSProperties } from 'react';
import type { ThemeColorType } from '../theme';

export interface ElementThemeCssProps {
  color?: ThemeColorType;
}

export type ElementThemeCssType<T extends Record<any, any>> =
  | SerializedStyles
  | ((props: ElementThemeCssProps & T) => SerializedStyles);

export interface ElementTypeProps<
  T extends Record<any, any> = Record<any, any>,
> {
  // className
  className?: string;
  // style
  style?: CSSProperties;
  // css
  css?: ElementThemeCssType<T>;
}

export type ElementsType<
  T extends string = string,
  P extends Record<any, any> = Record<any, any>,
> = Record<T, ElementTypeProps<P>>;

export type ElementType<
  T extends string = string,
  P extends Record<any, any> = Record<any, any>,
> = keyof ElementsType<T, P>;

export interface ElementProps<
  T extends string = string,
  P extends Record<any, any> = Record<any, any>,
> {
  // element type
  type?: ElementType<T, P>;
  // css
  css?: ElementThemeCssType<P>;
}

export type ElementThemeType<
  T extends string = string,
  P extends Record<any, any> = Record<any, any>,
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
