import React from 'react';
import { ClassNames } from '@emotion/react';
import { TableRowProps } from './row.types';
import Theme from '../theme';
import mergeStyles from '../_util/mergeStyles';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow(
    { children, className, type, style, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.table?.row;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;

    return (
      <ClassNames>
        {({ cx, css }) => (
          <tr
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
              getClassName(theme?.namespace, 'table__row'),
              themeComponent?.className,
              type &&
                getClassName(theme?.namespace, `table__row__type__${type}`),
              themeComponentType?.className,
              className,
            )}
            {...props}
          >
            {children}
          </tr>
        )}
      </ClassNames>
    );
  },
);

export default TableRow;
