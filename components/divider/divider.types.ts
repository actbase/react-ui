import React from 'react';
import { SerializedStyles } from '@emotion/react';

export type DividerColorType = Record<string, string>;

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  // color
  color?: keyof DividerColorType;
}

export type DividerThemeType = {
  // default color
  defaultColor?: keyof DividerColorType;
  // colors
  color?: DividerColorType;
  // default style
  style?: SerializedStyles;
};
