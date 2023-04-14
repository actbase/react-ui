import type React from 'react';
import type { ElementProps, ElementThemeType } from '../element';

export interface DividerProps<T extends string = string>
  extends React.HTMLAttributes<HTMLHRElement>,
    ElementProps<T> {
  // color
  color?: string;
}

export type DividerThemeType<T extends string = string> =
  ElementThemeType<T> & {};
