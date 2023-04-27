import type { TableProps } from './table.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import mergeStyles from '../_util/mergeStyles';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const Table = React.forwardRef<HTMLTableElement, TableProps>(function Table(
  { children, className, type, style, css: _css, ...props },
  ref,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.table;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;

  return (
    <ClassNames>
      {({ css, cx }) => (
        <table
          ref={ref}
          style={mergeStyles(
            themeComponent?.style,
            type && themeComponent?.type?.[type]?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({ color: theme?.color })
                : themeComponent?.css}
              ${type &&
              (typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({
                    color: theme?.color,
                  })
                : themeComponentType?.css)}
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css};
            `,
            getClassName(theme?.namespace, 'table'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `table__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        >
          {children}
        </table>
      )}
    </ClassNames>
  );
});

export default Table;
