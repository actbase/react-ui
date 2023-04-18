import React from 'react';
import { ClassNames } from '@emotion/react';
import { DividerProps } from './divider.types';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';

function Divider({
  style,
  className,
  color,
  type,
  css: _css,
  ...props
}: DividerProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <hr
          style={mergeStyles(
            theme?.components?.divider?.style,
            type && theme?.components?.divider?.type?.[type]?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              border: none;
              height: 1px;
              display: block;
              margin: 0;
              width: 100%;
              background-color: #eeeeee;
              ${typeof theme?.components?.divider?.css === 'function'
                ? theme.components.divider.css({ color: theme?.color })
                : theme?.components?.divider?.css};
              ${type &&
              (typeof theme?.components?.divider?.type?.[type]?.css ===
              'function'
                ? // @ts-ignore
                  theme?.components?.divider?.type?.[type]?.css({
                    color: theme?.color,
                  })
                : theme?.components?.divider?.type?.[type]?.css)}
              ${color && `background-color: ${theme?.color?.[color] ?? color}`};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'divider'),
            theme?.components?.divider?.className,
            type && getClassName(theme?.namespace, `divider__type__${type}`),
            type && theme?.components?.divider?.type?.[type]?.className,
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
}

export default Divider;
