import type { ButtonThemeType } from '../button';
import type { CardThemeType } from '../card/card.types';
import type { DividerThemeType } from '../divider';
import type { FormThemeType } from '../form';
import type { InputThemeType } from '../input';
import type { SpaceThemeType } from '../space';
import type { TypographyThemeType } from '../typography';
import type { GlobalProps } from '@emotion/react';
import { ListThemeType } from '../list/list.types';

export type ThemeColorType = Record<string, string>;

export type ThemeType = {
  // theme namespace
  namespace?: string;
  // global props
  global?: GlobalProps;
  components?: {
    button?: ButtonThemeType;
    card?: CardThemeType;
    divider?: DividerThemeType;
    form?: FormThemeType;
    input?: InputThemeType;
    list?: ListThemeType;
    space?: SpaceThemeType;
    table?: {};
    typography?: TypographyThemeType;
  };
  // theme colors
  color?: ThemeColorType;
};
