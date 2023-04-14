import type { ButtonThemeType } from '../button';
import type { DividerThemeType } from '../divider';
import type { FormThemeType } from '../form';
import type { InputThemeType } from '../input';
import type { SpaceThemeType } from '../space';
import type { TypographyThemeType } from '../typography';
import { GlobalProps } from '@emotion/react';

export type ThemeColorType = Record<string, string>;

export type ThemeType = {
  // theme namespace
  namespace?: string;
  // global props
  global?: GlobalProps;
  components?: {
    button?: ButtonThemeType;
    divider?: DividerThemeType;
    form?: FormThemeType;
    input?: InputThemeType;
    space?: SpaceThemeType;
    table?: {};
    typography?: TypographyThemeType;
  };
  // theme colors
  color?: ThemeColorType;
};
