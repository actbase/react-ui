import type React from 'react';
import type { ComponentProps, ComponentTheme } from '../component';
import { ComponentTypeProps } from '../component';
import { TableColThemeType } from './col.types';

export type TableRowCssPropsType = {};
export type TableRowType = Record<
  string,
  ComponentTypeProps<TableRowCssPropsType> & {
    col?: TableColThemeType;
  }
>;

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    ComponentProps<TableRowType, TableRowCssPropsType> {}

export type TableRowThemeType = ComponentTheme<
  TableRowType,
  TableRowCssPropsType
> & {
  col?: TableColThemeType;
};
