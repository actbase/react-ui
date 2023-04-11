import type React from 'react';

export type TypographyFontType = Record<string, string>;

export type TypographyLevelType = Record<
  number,
  { size: number; weight?: number }
>;

export type TypographyColorType = Record<string, string>;

export type TypographyProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'color'
> & {
  // Element
  el?: T;
  // Children
  children?: React.ReactNode;
  // Font
  font?: keyof TypographyFontType;
  // Level
  level?: keyof TypographyLevelType;
  // Font Size
  size?: number;
  // Font Weight
  weight?: number;
  // Color
  color?: keyof TypographyColorType;
};
