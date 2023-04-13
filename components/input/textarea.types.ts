import React from 'react';
import { SerializedStyles } from '@emotion/react';

export type InputTextareaResizeType = boolean | 'horizontal' | 'vertical';

export interface InputTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // resize
  resize?: InputTextareaResizeType;
}

export type InputTextareaThemeType = {
  // default radio input style
  style?: SerializedStyles;
};
