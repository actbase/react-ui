import type React from 'react';
import type {
  ComponentType,
  ComponentProps,
  ComponentTheme,
} from '../component';
import type { ThemeColorType } from '../theme';

export type TypographyCssPropsType = {};
export type TypographyType = ComponentType<TypographyCssPropsType>;

export type TypographyProps<T extends keyof JSX.IntrinsicElements = 'p'> = Omit<
  JSX.IntrinsicElements[T],
  'color'
> &
  ComponentProps<TypographyType, TypographyCssPropsType> & {
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

export type TypographyThemeType = ComponentTheme<
  TypographyType,
  TypographyCssPropsType
>;
