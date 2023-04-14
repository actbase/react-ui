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
import _Input, {
  InputThemeType,
  InputInputThemeType,
  InputInputProps,
  InputTextareaThemeType,
  InputCheckboxInputThemeType,
  InputCheckboxLabelThemeType,
  InputCheckboxProps,
  InputEmailProps,
  InputFileProps,
  InputCheckboxThemeType,
  InputPasswordProps,
  InputFileThemeType,
  InputRadioLabelThemeType,
  InputRadioThemeType,
  InputRadioProps,
  InputTextareaProps,
  InputTextareaResizeType,
  InputRadioInputThemeType,
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
import _Typography, {
  TypographyProps as _TypographyProps,
  TypographyThemeType as _TypographyThemeType,
} from './typography';

namespace UI {
  export const Divider = _Divider;
  export namespace Divider {
    export type Props = _DividerProps;
    export type ColorType = _DividerColorType;
    export type ThemeType = _DividerThemeType;
  }

  export const Form = _Form;
  export namespace Form {
    export type Props = _FormProps;
    export type ThemeType = _FormThemeType;
    export type ValidateTimingType = _FormValidateTimingType;
    export namespace Item {
      export type Props<T extends keyof JSX.IntrinsicElements> =
        _FormItemProps<T>;
      export type ThemeType = _FormItemThemeType;
      export type Handle = _FormItemHandle;
      export type ValidateType = _FormItemValidateType;
      export type ErrorType = _FormItemErrorType;
      export type ErrorValueType = _FormItemErrorValueType;
      export type ErrorStatusType = _FormItemErrorStatusType;
      export type ErrorThemeType = _FormItemErrorThemeType;
      export type Ref = _FormItemRef;
      export type LabelThemeType = _FormItemLabelThemeType;
    }
  }

  export const Input = _Input;
  export namespace Input {
    export type ThemeType = InputThemeType;
    export namespace Input {
      export type Props = InputInputProps;
      export type ThemeType = InputInputThemeType;
    }
    export namespace Textarea {
      export type ThemeType = InputTextareaThemeType;
    }
    export namespace Checkbox {
      export type Props = InputCheckboxProps;
      export type InputThemeType = InputCheckboxInputThemeType;
      export type LabelThemeType = InputCheckboxLabelThemeType;
      export type ThemeType = InputCheckboxThemeType;
    }
    export namespace Email {
      export type Props = InputEmailProps;
    }
    export namespace File {
      export type Props = InputFileProps;
      export type ThemeType = InputFileThemeType;
    }
    export namespace Password {
      export type Props = InputPasswordProps;
    }
    export namespace Radio {
      export type Props = InputRadioProps;
      export type LabelThemeType = InputRadioLabelThemeType;
      export type ThemeType = InputRadioThemeType;
      export type InputThemeType = InputRadioInputThemeType;
    }
    export namespace Textarea {
      export type Props = InputTextareaProps;
      export type ResizeType = InputTextareaResizeType;
    }
  }

  export const Provider = _Provider;
  export namespace Provider {
    export type ProviderProps = _ProviderProps;
  }

  export const styles = _styles;

  export const Space = _Space;
  export namespace Space {
    export type SizeType = _SpaceSizeType;
    export type AlignType = _SpaceAlignType;
    export type JustifyType = _SpaceJustifyType;
    export type ThemeType = _SpaceThemeType;
    export type DirectionType = _SpaceDirectionType;
    export type Props<T extends keyof JSX.IntrinsicElements> = _SpaceProps<T>;
  }

  export const Theme = _Theme;
  export namespace Theme {
    export type Type = _ThemeType;
    export type ProviderProps = _ThemeProviderProps;
    export type ColorType = _ThemeColorType;
  }

  export const Typography = _Typography;
  export namespace Typography {
    export type Props<T extends keyof JSX.IntrinsicElements> =
      _TypographyProps<T>;
    export type ThemeType = _TypographyThemeType;
  }
}

export default UI;
