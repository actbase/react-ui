import type React from 'react';
import type { SpaceSizeType } from '../space/space.types';
import type {
  TypographyColorType,
  TypographyFontType,
  TypographyLevelType,
  TypographyProps,
} from '../typography/typography.types';

export type InputThemeType = {
  style?: React.CSSProperties;
  label?: TypographyProps<'span'>;
  input?: {
    style?: React.CSSProperties;
  };
};

export type SpaceThemeType = {
  size?: Record<SpaceSizeType, number>;
  style?: React.CSSProperties;
};

export type TypographyThemeType = {
  defaultFont?: keyof TypographyFontType;
  font?: TypographyFontType;
  level?: TypographyLevelType;
  color?: TypographyColorType;
  style?: React.CSSProperties;
};

export type ThemeType = {
  size?: number;
  components?: {
    button?: {};
    divider?: {};
    form?: {};
    input?: InputThemeType;
    space?: SpaceThemeType;
    table?: {};
    typography?: TypographyThemeType;
  };
};
