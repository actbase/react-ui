import type React from 'react';
import type { SerializedStyles } from '@emotion/react';

export type TypographyFontType = Record<string, string>;
export type TypographyLevelType = Record<number, SerializedStyles>;
export type TypographyColorType = Record<string, string>;

export type TypographyProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'color' | 'style'
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
  // Style
  style?: SerializedStyles;
};

export type TypographyThemeType = {
  // default font
  defaultFont?: keyof TypographyFontType;
  // fonts
  font?: TypographyFontType;
  // default level
  defaultLevel?: keyof TypographyLevelType;
  // levels
  level?: TypographyLevelType;
  // default color
  defaultColor?: keyof TypographyColorType | string;
  // colors
  color?: TypographyColorType;
  // style
  style?: SerializedStyles;
};
