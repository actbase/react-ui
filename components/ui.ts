import type {
  DividerProps as _DividerProps,
  DividerColorType as _DividerColorType,
  DividerThemeType as _DividerThemeType,
} from './divider';
import _Divider from './divider';
import _Form from './form';
import type {
  SpaceSizeType as _SpaceSizeType,
  SpaceAlignType as _SpaceAlignType,
  SpaceJustifyType as _SpaceJustifyType,
  SpaceThemeType as _SpaceThemeType,
  SpaceProps as _SpaceProps,
} from './space';
import _Space from './space';
import type { ThemeType as _ThemeType } from './theme';
import _Theme from './theme';
import type {
  TypographyProps as _TypographyProps,
  TypographyThemeType as _TypographyThemeType,
  TypographyFontType as _TypographyFontType,
  TypographyLevelType as _TypographyLevelType,
  TypographyColorType as _TypographyColorType,
} from './typography';
import _Typography from './typography';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace UI {
  export type DividerProps = _DividerProps;
  export type DividerColorType = _DividerColorType;
  export type DividerThemeType = _DividerThemeType;
  export const Divider = _Divider;

  export const Form = _Form;

  export type SpaceSizeType = _SpaceSizeType;
  export type SpaceAlignType = _SpaceAlignType;
  export type SpaceJustifyType = _SpaceJustifyType;
  export type SpaceThemeType = _SpaceThemeType;
  export type SpaceProps<T extends keyof JSX.IntrinsicElements> =
    _SpaceProps<T>;
  export const Space = _Space;

  export type ThemeType = _ThemeType;
  export const Theme = _Theme;

  export type TypographyProps<T extends keyof JSX.IntrinsicElements> =
    _TypographyProps<T>;
  export type TypographyThemeType = _TypographyThemeType;
  export type TypographyFontType = _TypographyFontType;
  export type TypographyLevelType = _TypographyLevelType;
  export type TypographyColorType = _TypographyColorType;
  export const Typography = _Typography;
}

export default UI;
