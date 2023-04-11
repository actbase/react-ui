import type { SerializedStyles } from '@emotion/react';
import type { SpaceSizeType } from '../space/space.types';
import type {
  TypographyColorType,
  TypographyFontType,
  TypographyLevelType,
  TypographyProps,
} from '../typography/typography.types';

export type InputThemeType = {
  style?: SerializedStyles;
  label?: TypographyProps<'span'>;
  input?: {
    style?: SerializedStyles;
  };
};

export type SpaceThemeType = {
  size?: Record<SpaceSizeType, number>;
  style?: SerializedStyles;
};

export type TypographyThemeType = {
  defaultFont?: keyof TypographyFontType;
  font?: TypographyFontType;
  level?: TypographyLevelType;
  color?: TypographyColorType;
  style?: SerializedStyles;
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
