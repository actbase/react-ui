import type { SerializedStyles } from '@emotion/react';
import type { InputProps } from './input.types';

export type InputCheckboxProps = InputProps;

export type InputCheckboxLabelThemeType = {
  // default style
  style?: SerializedStyles;
};

export type InputCheckboxInputThemeType = {
  // default style
  style?: SerializedStyles;
};

export type InputCheckboxThemeType = {
  // default style
  style?: SerializedStyles;
  input?: InputCheckboxInputThemeType;
  label?: InputCheckboxLabelThemeType;
};
