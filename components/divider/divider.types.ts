import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type DividerCssPropsType = {};
export type DividerType = ComponentType<DividerCssPropsType>;

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    ComponentProps<DividerType, DividerCssPropsType> {
  // color
  color?: string;
}
export type DividerThemeType = ComponentTheme<
  DividerType,
  DividerCssPropsType
> & {};
