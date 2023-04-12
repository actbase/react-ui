import type { SpaceThemeType } from '../space/space.types';
import type { TypographyThemeType } from '../typography/typography.types';
import { ButtonThemeType } from '../button/button.types';
import { DividerThemeType } from '../divider/divider.types';
import { InputThemeType } from '../input/input.types';

export type ThemeType = {
  components?: {
    button?: ButtonThemeType;
    divider?: DividerThemeType;
    form?: {};
    input?: InputThemeType;
    space?: SpaceThemeType;
    table?: {};
    typography?: TypographyThemeType;
  };
};
