import type { ButtonThemeType } from '../button';
import type { DividerThemeType } from '../divider';
import type { FormThemeType } from '../form';
import type { InputThemeType } from '../input';
import type { SpaceThemeType } from '../space';
import type { TypographyThemeType } from '../typography';

export type ThemeType = {
  components?: {
    button?: ButtonThemeType;
    divider?: DividerThemeType;
    form?: FormThemeType;
    input?: InputThemeType;
    space?: SpaceThemeType;
    table?: {};
    typography?: TypographyThemeType;
  };
};
