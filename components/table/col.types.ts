import type React from 'react';
import type {
  ComponentType,
  ComponentProps,
  ComponentTheme,
} from '../component';

export type TableColCssPropsType = {};
export type TableColType = ComponentType<TableColCssPropsType>;

export interface TableColProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement>,
    ComponentProps<TableColType, TableColCssPropsType> {}

export type TableColThemeType = ComponentTheme<
  TableColType,
  TableColCssPropsType
>;
