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
  FormItemHandle as _FormItemHandle,
  FormItemValidateType as _FormItemValidateType,
  FormItemErrorType as _FormItemErrorType,
  FormItemErrorValueType as _FormItemErrorValueType,
  FormItemErrorStatusType as _FormItemErrorStatusType,
  FormItemErrorThemeType as _FormItemErrorThemeType,
  FormValidateTimingType as _FormValidateTimingType,
  FormItemRef as _FormItemRef,
  FormItemLabelThemeType as _FormItemLabelThemeType,
} from './form';
import _Provider, { ProviderProps as _ProviderProps } from './provider';
import _Space, {
  SpaceSizeType as _SpaceSizeType,
  SpaceAlignType as _SpaceAlignType,
  SpaceJustifyType as _SpaceJustifyType,
  SpaceThemeType as _SpaceThemeType,
  SpaceProps as _SpaceProps,
  SpaceDirectionType as _SpaceDirectionType,
} from './space';
import _Theme, {
  ThemeType as _ThemeType,
  ThemeProviderProps as _ThemeProviderProps,
  ThemeColorType as _ThemeColorType,
} from './theme';
import _Typography, {
  TypographyProps as _TypographyProps,
  TypographyThemeType as _TypographyThemeType,
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
  export type FormItemHandle = _FormItemHandle;
  export type FormItemValidateType = _FormItemValidateType;
  export type FormItemErrorType = _FormItemErrorType;
  export type FormItemErrorValueType = _FormItemErrorValueType;
  export type FormItemErrorStatusType = _FormItemErrorStatusType;
  export type FormItemErrorThemeType = _FormItemErrorThemeType;
  export type FormValidateTimingType = _FormValidateTimingType;
  export type FormItemRef = _FormItemRef;
  export type FormItemLabelThemeType = _FormItemLabelThemeType;
  export const Form = _Form;

  export type ProviderProps = _ProviderProps;
  export const Provider = _Provider;

  export type SpaceSizeType = _SpaceSizeType;
  export type SpaceAlignType = _SpaceAlignType;
  export type SpaceJustifyType = _SpaceJustifyType;
  export type SpaceThemeType = _SpaceThemeType;
  export type SpaceDirectionType = _SpaceDirectionType;
  export type SpaceProps<T extends keyof JSX.IntrinsicElements> =
    _SpaceProps<T>;
  export const Space = _Space;

  export type ThemeType = _ThemeType;
  export type ThemeProviderProps = _ThemeProviderProps;
  export type ThemeColorType = _ThemeColorType;
  export const Theme = _Theme;

  export type TypographyProps<T extends keyof JSX.IntrinsicElements> =
    _TypographyProps<T>;
  export type TypographyThemeType = _TypographyThemeType;
  export const Typography = _Typography;
}

export default UI;
