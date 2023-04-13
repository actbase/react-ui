import { InputProps } from './input.types';
import { SerializedStyles } from '@emotion/react';

export type InputRadioProps = InputProps;

export type InputRadioInputThemeType = {
  // default style
  style?: SerializedStyles;
};

export type InputRadioLabelThemeType = {
  // default style
  style?: SerializedStyles;
};

export type InputRadioThemeType = {
  // default radio input style
  style?: SerializedStyles;
  // input
  input?: InputRadioInputThemeType;
  // label
  label?: InputRadioLabelThemeType;
};
