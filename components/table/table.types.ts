import type React from 'react';
import type {
  ComponentProps,
  ComponentTypeProps,
  ComponentTheme,
} from '../component';
import type { TableRowThemeType } from './row.types';

export type TableCssPropsType = {};
export type TableType = Record<
  string,
  ComponentTypeProps<TableCssPropsType> & {
    row?: TableRowThemeType;
  }
>;

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    ComponentProps<TableType, TableCssPropsType> {}

export type TableThemeType = ComponentTheme<TableType, TableCssPropsType> & {
  row?: TableRowThemeType;
};
