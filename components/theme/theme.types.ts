import type { GlobalProps } from '@emotion/react';
import type { ButtonThemeType } from '../button';
import type { CardThemeType } from '../card';
import type { DividerThemeType } from '../divider';
import type { FormThemeType } from '../form';
import type { InputThemeType } from '../input';
import type { SpaceThemeType } from '../space';
import type { TypographyThemeType } from '../typography';
import type { ListThemeType } from '../list';
import type { ToastThemeType } from '../toast/toast.type';
import type { AlertThemeType } from '../alert';
import type { BlockThemeType } from '../block';
import type { SuspenseThemeType } from '../suspense';
import type { ModalThemeType } from '../modal';

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
    modal?: ModalThemeType;
    space?: SpaceThemeType;
    suspense?: SuspenseThemeType;
    table?: {};
    toast?: ToastThemeType;
    typography?: TypographyThemeType;
  };
  // theme colors
  color?: ThemeColorType;
};
