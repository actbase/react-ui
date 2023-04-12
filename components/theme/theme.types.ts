import type { SerializedStyles } from '@emotion/react';
import type { SpaceThemeType } from '../space/space.types';
import type {
  TypographyProps,
  TypographyThemeType,
} from '../typography/typography.types';
import { ButtonThemeType } from '../button/button.types';
import { DividerThemeType } from '../divider/divider.types';

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
