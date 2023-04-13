import type React from 'react';
import type { ElementProps } from '../element';
import type { ThemeColorType } from '../theme';
import { ElementThemeType } from '../element';

export type TypographyProps<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
> = Omit<JSX.IntrinsicElements[T], 'color'> &
  ElementProps<P> & {
    // Element
    el?: T;
    // Children
    children?: React.ReactNode;
    // Font Size
    size?: number;
    // Font Weight
    weight?: number;
    // Color
    color?: keyof ThemeColorType;
  };

export type TypographyThemeType<T extends string = string> =
  ElementThemeType<T> & {};
