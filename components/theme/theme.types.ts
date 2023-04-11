import type { SpaceSizeType } from '../space/space.types';
import type {
  TypographyColorType,
  TypographyFontType,
  TypographyLevelType,
} from '../typography/typography.types';

export interface ThemeProps {
  size?: number;
  components?: {
    button?: {};
    divider?: {};
    form?: {};
    input?: {};
    space?: {
      size?: Record<SpaceSizeType, number>;
    };
    table?: {};
    typography?: {
      defaultFont?: keyof TypographyFontType;
      font?: TypographyFontType;
      level?: TypographyLevelType;
      color?: TypographyColorType;
    };
  };
}
