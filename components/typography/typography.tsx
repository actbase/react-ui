import React from 'react';
import { TypographyProps } from './typography.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';

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
  ...props
}: TypographyProps<T, P>) {
  const theme = Theme.useContext();
  const Element = el ?? 'p';
  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
          style={theme?.components?.typography?.style}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.typography?.css}
              ${type && theme?.components?.typography?.type?.[type]}
              color: ${color && (theme?.color?.[color] ?? color)};
              ${size && `font-size: ${size}px;`}
              ${weight && `font-weight: ${weight};`}
            `,
            getClassName(theme?.namespace, 'typography'),
            theme?.components?.typography?.className,
            type && getClassName(theme?.namespace, `typography__type__${type}`),
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
