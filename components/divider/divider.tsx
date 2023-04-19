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
  const themeComponent = theme?.components?.divider;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
  return (
    <ClassNames>
      {({ css, cx }) => (
        <hr
          style={mergeStyles(
            themeComponent?.style,
            themeComponentType?.style,
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
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({ color: theme?.color })
                : themeComponent?.css};
              ${typeof themeComponentType?.css === 'function'
                ? themeComponentType?.css({
                    color: theme?.color,
                  })
                : themeComponentType?.css}
              ${color && `background-color: ${theme?.color?.[color] ?? color}`};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'divider'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `divider__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
}

export default Divider;
