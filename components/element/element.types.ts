import { SerializedStyles } from '@emotion/utils';
import { CSSProperties } from 'react';

export type ElementTypes<T extends string = string> = Record<
  T,
  SerializedStyles
>;
export type ElementType<T extends string = string> = keyof ElementTypes<T>;

export interface ElementProps<T extends string = string> {
  // element type
  type?: ElementType<T>;
}

export type ElementThemeType<T extends string = string> = {
  // className
  className?: string;
  // style
  style?: CSSProperties;
  // css
  css?: SerializedStyles;
  // type
  type?: ElementTypes<T>;
};
