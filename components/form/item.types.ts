import type React from 'react';
import { SerializedStyles } from '@emotion/react';

export type FormItemProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'label'
> & {
  // element
  el?: T;
  // label
  label?: React.ReactNode;
  // error
  error?: React.ReactNode;
  // name
  name?: string;
  // default value
  defaultValue?: string;
};

export type FormItemThemeType = {
  // style
  style?: SerializedStyles;
  // label
  label?: {
    // style
    style?: SerializedStyles;
  };
  // error
  error?: {
    // style
    style?: SerializedStyles;
  };
};
