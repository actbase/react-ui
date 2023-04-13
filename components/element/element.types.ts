import { SerializedStyles } from '@emotion/utils';

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
  // style
  style?: SerializedStyles;
  // type
  type?: ElementTypes<T>;
};
