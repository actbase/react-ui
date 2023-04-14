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
          style={mergeStyles(theme?.components?.divider?.style, style)}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              border: none;
              height: 1px;
              display: block;
              margin: 0;
              width: 100%;
              background-color: #eeeeee;
              ${theme?.components?.divider?.css};
              ${type && theme?.components?.divider?.type?.[type]}
              ${color && `background-color: ${theme?.color?.[color] ?? color}`};
              ${_css}
            `,
            getClassName(theme?.namespace, 'divider'),
            theme?.components?.divider?.className,
            type && getClassName(theme?.namespace, `divider__type__${type}`),
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
}

export default Divider;
