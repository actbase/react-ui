import type { ButtonThemeType } from '../button';
import type { CardThemeType } from '../card/card.types';
import type { DividerThemeType } from '../divider';
import type { FormThemeType } from '../form';
import type { InputThemeType } from '../input';
import type { SpaceThemeType } from '../space';
import type { TypographyThemeType } from '../typography';
import type { GlobalProps } from '@emotion/react';
import type { ListThemeType } from '../list/list.types';
import type { ToastThemeType } from '../toast/toast.type';
import { AlertThemeType } from '../alert';
import { BlockThemeType } from '../block';
import { SuspenseThemeType } from '../suspense/suspense.types';

export type ThemeColorType = Record<string, string>;

export type ThemeType = {
  // theme namespace
  namespace?: string;
  // global props
  global?: GlobalProps;
  components?: {
    alert?: AlertThemeType;
    block?: BlockThemeType;
    button?: ButtonThemeType;
    card?: CardThemeType;
    divider?: DividerThemeType;
    form?: FormThemeType;
    input?: InputThemeType;
    list?: ListThemeType;
    space?: SpaceThemeType;
    suspense?: SuspenseThemeType;
    table?: {};
    toast?: ToastThemeType;
    typography?: TypographyThemeType;
  };
  // theme colors
  color?: ThemeColorType;
};
