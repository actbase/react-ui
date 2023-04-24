import _mergeStyles from './_util/mergeStyles';
import _Alert, {
  AlertProviderProps as _AlertProviderProps,
  AlertCssPropsType as _AlertCssPropsType,
  HandleAlertType as _HandleAlertType,
  HandleAlertDestroyType as _HandleAlertDestroyType,
  AlertTemplateType as _AlertTemplateType,
  AlertThemeType as _AlertThemeType,
  AlertContext as _AlertContext,
  AlertType as _AlertType,
  AlertProps as _AlertProps,
  AlertTemplateProps as _AlertTemplateProps,
  AlertOptions as _AlertOptions,
  AlertProviderState as _AlertProviderState,
} from './alert';
import _Divider, {
  DividerProps as _DividerProps,
  DividerCssPropsType as _DividerCssPropsType,
  DividerThemeType as _DividerThemeType,
  DividerType as _DividerType,
} from './divider';
import _Block, {
  BlockProps as _BlockProps,
  BlockCssPropsType as _BlockCssPropsType,
  BlockThemeType as _BlockThemeType,
  BlockType as _BlockType,
} from './block';
import _Button, {
  ButtonProps as _ButtonProps,
  ButtonType as _ButtonType,
  ButtonThemeType as _ButtonThemeType,
  ButtonCssPropsType as _ButtonCssPropsType,
} from './button';
import _Card, {
  CardThemeType as _CardThemeType,
  CardType as _CardType,
  CardCssPropsType as _CardCssPropsType,
  CardProps as _CardProps,
} from './card';
import { ClassNames as _ClassNames, css as _css } from '@emotion/react';
import _List, {
  ListItemProps as _ListItemProps,
  ListItemType as _ListItemType,
  ListItemCssPropsType as _ListItemCssPropsType,
  ListCssPropsType as _ListCssPropsType,
  ListType as _ListType,
  ListItemThemeType as _ListItemThemeType,
  ListProps as _ListProps,
  ListThemeType as _ListThemeType,
} from './list';
import _Form, {
  FormProps as _FormProps,
  FormType as _FormType,
  FormItemType as _FormItemType,
  FormItemErrorStatusType as _FormItemErrorStatusType,
  FormCssPropsType as _FormCssPropsType,
  FormItemCssPropsType as _FormItemCssPropsType,
  FormItemRef as _FormItemRef,
  FormItemErrorValueType as _FormItemErrorValueType,
  FormItemHandle as _FormItemHandle,
  FormItemErrorThemeType as _FormItemErrorThemeType,
  FormItemLabelThemeType as _FormItemLabelThemeType,
  FormItemValidateType as _FormItemValidateType,
  FormValidateTimingType as _FormValidateTimingType,
  FormThemeType as _FormThemeType,
  FormItemProps as _FormItemProps,
  FormItemThemeType as _FormItemThemeType,
  FormItemErrorType as _FormItemErrorType,
} from './form';
import _Input, {
  InputThemeType as _InputThemeType,
  InputEmailThemeType as _InputEmailThemeType,
  InputRadioType as _InputRadioType,
  InputRadioCssPropsType as _InputRadioCssPropsType,
  InputEmailType as _InputEmailType,
  InputEmailCssPropsType as _InputEmailCssPropsType,
  InputFileType as _InputFileType,
  InputEmailProps as _InputEmailProps,
  InputInputThemeType as _InputInputThemeType,
  InputPasswordThemeType as _InputPasswordThemeType,
  InputRadioProps as _InputRadioProps,
  InputFileThemeType as _InputFileThemeType,
  InputPasswordProps as _InputPasswordProps,
  InputTextareaProps as _InputTextareaProps,
  InputFileProps as _InputFileProps,
  InputCheckboxProps as _InputCheckboxProps,
  InputCheckboxThemeType as _InputCheckboxThemeType,
  InputCheckboxLabelThemeType as _InputCheckboxLabelThemeType,
  InputRadioLabelThemeType as _InputRadioLabelThemeType,
  InputInputProps as _InputInputProps,
  InputTextareaThemeType as _InputTextareaThemeType,
  InputTextareaResizeType as _InputTextareaResizeType,
  InputRadioInputThemeType as _InputRadioInputThemeType,
  InputCheckboxCssPropsType as _InputCheckboxCssPropsType,
  InputPasswordCssPropsType as _InputPasswordCssPropsType,
  InputFileCssPropsType as _InputFileCssPropsType,
  InputTextareaCssPropsType as _InputTextareaCssPropsType,
  InputRadioThemeType as _InputRadioThemeType,
  InputCheckboxType as _InputCheckboxType,
  InputCheckboxInputThemeType as _InputCheckboxInputThemeType,
  InputTextareaType as _InputTextareaType,
  InputPasswordType as _InputPasswordType,
  InputColorProps as _InputColorProps,
  InputDateThemeType as _InputDateThemeType,
  InputColorCssPropsType as _InputColorCssPropsType,
  InputColorThemeType as _InputColorThemeType,
  InputDateCssPropsType as _InputDateCssPropsType,
  InputColorType as _InputColorType,
  InputDateProps as _InputDateProps,
  InputDateType as _InputDateType,
} from './input';
import _Provider, { ProviderProps as _ProviderProps } from './provider';
import _Space, {
  SpaceSizeType as _SpaceSizeType,
  SpaceType as _SpaceType,
  SpaceCssPropsType as _SpaceCssPropsType,
  SpaceDirectionType as _SpaceDirectionType,
  SpaceProps as _SpaceProps,
  SpaceThemeType as _SpaceThemeType,
  SpaceAlignType as _SpaceAlignType,
  SpaceJustifyType as _SpaceJustifyType,
} from './space';
import _styles from './styles';
import _Suspense, {
  SuspenseThemeType as _SuspenseThemeType,
  SuspenseProps as _SuspenseProps,
  SuspenseChildrenProps as _SuspenseChildrenProps,
} from './suspense';
import _Theme, {
  ThemeType as _ThemeType,
  ThemeColorType as _ThemeColorType,
  ThemeProviderProps as _ThemeProviderProps,
} from './theme';
import _Toast, {
  ToastState as _ToastState,
  ToastProviderHandle as _ToastProviderHandle,
  ToastProviderProps as _ToastProviderProps,
  ToastContext as _ToastContext,
  ToastType as _ToastType,
  ToastOptionsType as _ToastOptionsType,
} from './toast';
import _Typography, {
  TypographyProps as _TypographyProps,
  TypographyCssPropsType as _TypographyCssPropsType,
  TypographyThemeType as _TypographyThemeType,
  TypographyType as _TypographyType,
} from './typography';

namespace UI {
  export const mergeStyles = _mergeStyles;

  export const Alert = _Alert;
  export type AlertProviderProps = _AlertProviderProps;
  export type AlertCssPropsType = _AlertCssPropsType;
  export type HandleAlertType = _HandleAlertType;
  export type HandleAlertDestroyType = _HandleAlertDestroyType;
  export type AlertTemplateType = _AlertTemplateType;
  export type AlertThemeType = _AlertThemeType;
  export type AlertContext = _AlertContext;
  export type AlertType = _AlertType;
  export type AlertProps = _AlertProps;
  export type AlertTemplateProps = _AlertTemplateProps;
  export type AlertOptions = _AlertOptions;
  export type AlertProviderState = _AlertProviderState;

  export const Divider = _Divider;
  export type DividerProps = _DividerProps;
  export type DividerCssPropsType = _DividerCssPropsType;
  export type DividerThemeType = _DividerThemeType;
  export type DividerType = _DividerType;

  export const Block = _Block;
  export type BlockProps = _BlockProps;
  export type BlockCssPropsType = _BlockCssPropsType;
  export type BlockThemeType = _BlockThemeType;
  export type BlockType = _BlockType;

  export const Button = _Button;
  export type ButtonProps = _ButtonProps;
  export type ButtonType = _ButtonType;
  export type ButtonThemeType = _ButtonThemeType;
  export type ButtonCssPropsType = _ButtonCssPropsType;

  export const Card = _Card;
  export type CardThemeType = _CardThemeType;
  export type CardType = _CardType;
  export type CardCssPropsType = _CardCssPropsType;
  export type CardProps = _CardProps;

  export const ClassNames = _ClassNames;
  export const css = _css;

  export const List = _List;
  export type ListItemProps = _ListItemProps;
  export type ListItemType = _ListItemType;
  export type ListItemCssPropsType = _ListItemCssPropsType;
  export type ListCssPropsType = _ListCssPropsType;
  export type ListType = _ListType;
  export type ListItemThemeType = _ListItemThemeType;
  export type ListProps = _ListProps;
  export type ListThemeType = _ListThemeType;

  export const Form = _Form;
  export type FormProps = _FormProps;
  export type FormType = _FormType;
  export type FormItemType = _FormItemType;
  export type FormItemErrorStatusType = _FormItemErrorStatusType;
  export type FormCssPropsType = _FormCssPropsType;
  export type FormItemCssPropsType = _FormItemCssPropsType;
  export type FormItemRef = _FormItemRef;
  export type FormItemErrorValueType = _FormItemErrorValueType;
  export type FormItemHandle = _FormItemHandle;
  export type FormItemErrorThemeType = _FormItemErrorThemeType;
  export type FormItemLabelThemeType = _FormItemLabelThemeType;
  export type FormItemValidateType = _FormItemValidateType;
  export type FormValidateTimingType = _FormValidateTimingType;
  export type FormThemeType = _FormThemeType;
  export type FormItemProps = _FormItemProps;
  export type FormItemThemeType = _FormItemThemeType;
  export type FormItemErrorType = _FormItemErrorType;

  export const Input = _Input;
  export type InputThemeType = _InputThemeType;
  export type InputEmailThemeType = _InputEmailThemeType;
  export type InputRadioType = _InputRadioType;
  export type InputRadioCssPropsType = _InputRadioCssPropsType;
  export type InputEmailType = _InputEmailType;
  export type InputEmailCssPropsType = _InputEmailCssPropsType;
  export type InputFileType = _InputFileType;
  export type InputEmailProps = _InputEmailProps;
  export type InputInputThemeType = _InputInputThemeType;
  export type InputPasswordThemeType = _InputPasswordThemeType;
  export type InputRadioProps = _InputRadioProps;
  export type InputFileThemeType = _InputFileThemeType;
  export type InputPasswordProps = _InputPasswordProps;
  export type InputTextareaProps = _InputTextareaProps;
  export type InputFileProps = _InputFileProps;
  export type InputCheckboxProps = _InputCheckboxProps;
  export type InputCheckboxThemeType = _InputCheckboxThemeType;
  export type InputCheckboxLabelThemeType = _InputCheckboxLabelThemeType;
  export type InputRadioLabelThemeType = _InputRadioLabelThemeType;
  export type InputInputProps = _InputInputProps;
  export type InputTextareaThemeType = _InputTextareaThemeType;
  export type InputTextareaResizeType = _InputTextareaResizeType;
  export type InputRadioInputThemeType = _InputRadioInputThemeType;
  export type InputCheckboxCssPropsType = _InputCheckboxCssPropsType;
  export type InputPasswordCssPropsType = _InputPasswordCssPropsType;
  export type InputFileCssPropsType = _InputFileCssPropsType;
  export type InputTextareaCssPropsType = _InputTextareaCssPropsType;
  export type InputRadioThemeType = _InputRadioThemeType;
  export type InputCheckboxType = _InputCheckboxType;
  export type InputCheckboxInputThemeType = _InputCheckboxInputThemeType;
  export type InputTextareaType = _InputTextareaType;
  export type InputPasswordType = _InputPasswordType;
  export type InputColorProps = _InputColorProps;
  export type InputDateThemeType = _InputDateThemeType;
  export type InputColorCssPropsType = _InputColorCssPropsType;
  export type InputColorThemeType = _InputColorThemeType;
  export type InputDateCssPropsType = _InputDateCssPropsType;
  export type InputColorType = _InputColorType;
  export type InputDateProps = _InputDateProps;
  export type InputDateType = _InputDateType;

  export const Provider = _Provider;
  export type ProviderProps = _ProviderProps;

  export const Space = _Space;
  export type SpaceSizeType = _SpaceSizeType;
  export type SpaceType = _SpaceType;
  export type SpaceCssPropsType = _SpaceCssPropsType;
  export type SpaceDirectionType = _SpaceDirectionType;
  export type SpaceProps = _SpaceProps;
  export type SpaceThemeType = _SpaceThemeType;
  export type SpaceAlignType = _SpaceAlignType;
  export type SpaceJustifyType = _SpaceJustifyType;

  export const styles = _styles;

  export const Suspense = _Suspense;
  export type SuspenseThemeType = _SuspenseThemeType;
  export type SuspenseProps = _SuspenseProps;
  export type SuspenseChildrenProps = _SuspenseChildrenProps;

  export const Theme = _Theme;
  export type ThemeType = _ThemeType;
  export type ThemeColorType = _ThemeColorType;
  export type ThemeProviderProps = _ThemeProviderProps;

  export const Toast = _Toast;
  export type ToastState = _ToastState;
  export type ToastProviderHandle = _ToastProviderHandle;
  export type ToastProviderProps = _ToastProviderProps;
  export type ToastContext = _ToastContext;
  export type ToastType = _ToastType;
  export type ToastOptionsType = _ToastOptionsType;

  export const Typography = _Typography;
  export type TypographyProps = _TypographyProps;
  export type TypographyCssPropsType = _TypographyCssPropsType;
  export type TypographyThemeType = _TypographyThemeType;
  export type TypographyType = _TypographyType;
}

export default UI;
