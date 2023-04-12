import type { SerializedStyles } from '@emotion/react';
import type { SpaceSizeType } from '../space/space.types';
import type {
  TypographyColorType,
  TypographyFontType,
  TypographyLevelType,
  TypographyProps,
} from '../typography/typography.types';
import { ButtonThemeType } from '../button/button.types';

export type InputThemeType = {
  // default input style
  style?: SerializedStyles;
  // default label props
  label?: TypographyProps<'span'>;
  // default input
  input?: {
    // default input style
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
  defaultLevel?: keyof TypographyLevelType;
  level?: TypographyLevelType;
  defaultColor?: keyof TypographyColorType;
  color?: TypographyColorType;
  style?: SerializedStyles;
};

export type ThemeType = {
  size?: number;
  components?: {
    button?: ButtonThemeType;
    divider?: {};
    form?: {};
    input?: InputThemeType;
    space?: SpaceThemeType;
    table?: {};
    typography?: TypographyThemeType;
  };
};
