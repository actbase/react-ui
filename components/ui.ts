import _Divider, {
  DividerProps as _DividerProps,
  DividerColorType as _DividerColorType,
  DividerThemeType as _DividerThemeType,
} from './divider';
import _Form, {
  FormProps as _FormProps,
  FormItemProps as _FormItemProps,
  FormItemThemeType as _FormItemThemeType,
  FormThemeType as _FormThemeType,
} from './form';
import _Space, {
  SpaceSizeType as _SpaceSizeType,
  SpaceAlignType as _SpaceAlignType,
  SpaceJustifyType as _SpaceJustifyType,
  SpaceThemeType as _SpaceThemeType,
  SpaceProps as _SpaceProps,
  SpaceDirectionType as _SpaceDirectionType,
} from './space';
import _Theme, { ThemeType as _ThemeType } from './theme';
import _Typography, {
  TypographyProps as _TypographyProps,
  TypographyThemeType as _TypographyThemeType,
  TypographyFontType as _TypographyFontType,
  TypographyLevelType as _TypographyLevelType,
  TypographyColorType as _TypographyColorType,
} from './typography';

namespace UI {
  export type DividerProps = _DividerProps;
  export type DividerColorType = _DividerColorType;
  export type DividerThemeType = _DividerThemeType;
  export const Divider = _Divider;

  export type FormProps = _FormProps;
  export type FormItemProps<T extends keyof JSX.IntrinsicElements> =
    _FormItemProps<T>;
  export type FormItemThemeType = _FormItemThemeType;
  export type FormThemeType = _FormThemeType;
  export const Form = _Form;

  export type SpaceSizeType = _SpaceSizeType;
  export type SpaceAlignType = _SpaceAlignType;
  export type SpaceJustifyType = _SpaceJustifyType;
  export type SpaceThemeType = _SpaceThemeType;
  export type SpaceDirectionType = _SpaceDirectionType;
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
