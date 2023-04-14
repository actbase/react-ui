import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import { CardProps } from './card.types';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const Card = React.forwardRef(function Card<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
>(
  {
    el,
    children,
    className,
    style,
    type,
    htmlType,
    css: _css,
  }: CardProps<T, P>,
  ref: React.ForwardedRef<JSX.IntrinsicElements[T]>,
) {
  const Element = el ?? 'div';
  const theme = Theme.useContext();

  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
          // @ts-ignore
          ref={ref}
          type={htmlType}
          // @ts-ignore
          style={mergeStyles(theme?.components?.card?.style, style)}
          // @ts-ignore
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.card?.css};
              ${type && theme?.components?.card?.type?.[type]};
              ${_css}
            `,
            getClassName(theme?.namespace, 'card'),
            theme?.components?.card?.className,
            type && getClassName(theme?.namespace, `card__type__${type}`),
            className,
          )}
        >
          {children}
        </Element>
      )}
    </ClassNames>
  );
});

export default Card;
