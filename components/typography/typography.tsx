import type { TypographyProps } from './typography.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';

function Typography<T extends keyof JSX.IntrinsicElements>({
  children,
  el,
  className,
  weight,
  size,
  color,
  type,
  style,
  css: _css,
  ...props
}: TypographyProps<T>) {
  const theme = Theme.useContext();
  const Element = el ?? 'p';
  const themeComponent = theme?.components?.typography;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
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
              color: ${color && (theme?.color?.[color] ?? color)};
              ${size && `font-size: ${size}px;`}
              ${weight && `font-weight: ${weight};`}
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css};
            `,
            getClassName(theme?.namespace, 'typography'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `typography__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        >
          {children}
        </Element>
      )}
    </ClassNames>
  );
}

export default Typography;
