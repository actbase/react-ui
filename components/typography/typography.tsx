import React from 'react';
import { TypographyProps } from './typography.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';

function Typography<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
>({
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
}: TypographyProps<T, P>) {
  const theme = Theme.useContext();
  const Element = el ?? 'p';
  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
          style={mergeStyles(
            theme?.components?.typography?.style,
            type && theme?.components?.typography?.type?.[type]?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof theme?.components?.typography?.css === 'function'
                ? theme.components.typography.css({ color: theme?.color })
                : theme?.components?.typography?.css}
              ${type &&
              (typeof theme?.components?.typography?.type?.[type]?.css
                ? // @ts-ignore
                  theme.components.typography.type[type].css({
                    color: theme?.color,
                  })
                : theme?.components?.typography?.type?.[type]?.css)}
              color: ${color && (theme?.color?.[color] ?? color)};
              ${size && `font-size: ${size}px;`}
              ${weight && `font-weight: ${weight};`}
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css};
            `,
            getClassName(theme?.namespace, 'typography'),
            theme?.components?.typography?.className,
            type && getClassName(theme?.namespace, `typography__type__${type}`),
            type && theme?.components?.typography?.type?.[type]?.className,
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
