import _Divider, {
  DividerProps as _DividerProps,
  DividerThemeType as _DividerThemeType,
} from './divider';
import _Button, {
  ButtonThemeType as _ButtonThemeType,
  ButtonProps as _ButtonProps,
} from './button';
import _Card, {
  CardThemeType as _CardThemeType,
  CardProps as _CardProps,
} from './card';
import _List, {
  ListItemProps as _ListItemProps,
  ListProps as _ListProps,
  ListItemThemeType as _ListItemThemeType,
  ListThemeType as _ListThemeType,
  ListTypePropsThemeType as _ListTypePropsThemeType,
} from './list';
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
import _Input, {
  InputThemeType as _InputThemeType,
  InputInputThemeType as _InputInputThemeType,
  InputInputProps as _InputInputProps,
  InputTextareaThemeType as _InputTextareaThemeType,
  InputCheckboxInputThemeType as _InputCheckboxInputThemeType,
  InputCheckboxLabelThemeType as _InputCheckboxLabelThemeType,
  InputCheckboxProps as _InputCheckboxProps,
  InputEmailProps as _InputEmailProps,
  InputFileProps as _InputFileProps,
  InputCheckboxThemeType as _InputCheckboxThemeType,
  InputPasswordProps as _InputPasswordProps,
  InputFileThemeType as _InputFileThemeType,
  InputRadioLabelThemeType as _InputRadioLabelThemeType,
  InputRadioThemeType as _InputRadioThemeType,
  InputRadioProps as _InputRadioProps,
  InputTextareaProps as _InputTextareaProps,
  InputTextareaResizeType as _InputTextareaResizeType,
  InputRadioInputThemeType as _InputRadioInputThemeType,
  InputEmailThemeType as _InputEmailThemeType,
  InputPasswordThemeType as _InputPasswordThemeType,
} from './input';
import _Provider, { ProviderProps as _ProviderProps } from './provider';
import _Space, {
  SpaceSizeType as _SpaceSizeType,
  SpaceAlignType as _SpaceAlignType,
  SpaceJustifyType as _SpaceJustifyType,
  SpaceThemeType as _SpaceThemeType,
  SpaceProps as _SpaceProps,
  SpaceDirectionType as _SpaceDirectionType,
} from './space';
import _styles from './styles';
import _Theme, {
  ThemeType as _ThemeType,
  ThemeProviderProps as _ThemeProviderProps,
  ThemeColorType as _ThemeColorType,
} from './theme';
import _Toast, {
  ToastState as _ToastState,
  ToastType as _ToastType,
  ToastProps as _ToastProps,
  ToastOptionsType as _ToastOptionsType,
  ToastProviderProps as _ToastProviderProps,
  ToastProviderHandle as _ToastProviderHandle,
  ToastThemeType as _ToastThemeType,
  ToastContext as _ToastContext,
  ToastThemeProps as _ToastThemeProps,
} from './toast';
import _Typography, {
  TypographyProps as _TypographyProps,
  TypographyThemeType as _TypographyThemeType,
} from './typography';

namespace UI {
  export const Divider = _Divider;
  export type DividerProps = _DividerProps;
  export type DividerThemeType = _DividerThemeType;

  export const Button = _Button;
  export type ButtonThemeType = _ButtonThemeType;
  export type ButtonProps = _ButtonProps;

  export const Card = _Card;
  export type CardThemeType = _CardThemeType;
  export type CardProps<
    T extends keyof JSX.IntrinsicElements,
    P extends string = string,
  > = _CardProps<T, P>;

  export const List = _List;
  export type ListItemProps<
    T extends keyof JSX.IntrinsicElements,
    P extends string = string,
  > = _ListItemProps<T, P>;
  export type ListProps<
    T extends keyof JSX.IntrinsicElements,
    P extends string = string,
  > = _ListProps<T, P>;
  export type ListItemThemeType = _ListItemThemeType;
  export type ListThemeType = _ListThemeType;
  export type ListTypePropsThemeType = __ListTypePropsThemeType;

  export const Form = _Form;
  export type FormProps = _FormProps;
  export type FormItemProps<
    T extends keyof JSX.IntrinsicElements,
    P extends string = string,
  > = _FormItemProps<T, P>;
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

  export const Input = _Input;
  export type InputThemeType = _InputThemeType;
  export type InputInputThemeType = _InputInputThemeType;
  export type InputInputProps = _InputInputProps;
  export type InputTextareaThemeType = _InputTextareaThemeType;
  export type InputCheckboxInputThemeType = _InputCheckboxInputThemeType;
  export type InputCheckboxLabelThemeType = _InputCheckboxLabelThemeType;
  export type InputCheckboxProps = _InputCheckboxProps;
  export type InputEmailProps = _InputEmailProps;
  export type InputFileProps = _InputFileProps;
  export type InputCheckboxThemeType = _InputCheckboxThemeType;
  export type InputPasswordProps = _InputPasswordProps;
  export type InputFileThemeType = _InputFileThemeType;
  export type InputRadioLabelThemeType = _InputRadioLabelThemeType;
  export type InputRadioThemeType = _InputRadioThemeType;
  export type InputRadioProps = _InputRadioProps;
  export type InputTextareaProps = _InputTextareaProps;
  export type InputTextareaResizeType = _InputTextareaResizeType;
  export type InputRadioInputThemeType = _InputRadioInputThemeType;
  export type InputEmailThemeType = _InputEmailThemeType;
  export type InputPasswordThemeType = _InputPasswordThemeType;

  export const Provider = _Provider;
  export type ProviderProps = _ProviderProps;

  export const Space = _Space;
  export type SpaceSizeType = _SpaceSizeType;
  export type SpaceAlignType = _SpaceAlignType;
  export type SpaceJustifyType = _SpaceJustifyType;
  export type SpaceThemeType = _SpaceThemeType;
  export type SpaceDirectionType = _SpaceDirectionType;
  export type SpaceProps<
    T extends keyof JSX.IntrinsicElements,
    P extends string = string,
  > = _SpaceProps<T, P>;

  export const styles = _styles;

  export const Theme = _Theme;
  export type ThemeType = _ThemeType;
  export type ThemeProviderProps = _ThemeProviderProps;
  export type ThemeColorType = _ThemeColorType;

  export const Toast = _Toast;
  export type ToastState = _ToastState;
  export type ToastType = _ToastType;
  export type ToastProps = _ToastProps;
  export type ToastOptionsType = _ToastOptionsType;
  export type ToastProviderProps = _ToastProviderProps;
  export type ToastProviderHandle = _ToastProviderHandle;
  export type ToastThemeType = _ToastThemeType;
  export type ToastContext = _ToastContext;
  export type ToastThemeProps = _ToastThemeProps;

  export const Typography = _Typography;
  export type TypographyProps<
    T extends keyof JSX.IntrinsicElements,
    P extends string = string,
  > = _TypographyProps<T, P>;
  export type TypographyThemeType = _TypographyThemeType;
}

export default UI;
