import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import { CardProps } from './card.types';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const Card = React.forwardRef(function Card<
  T extends keyof JSX.IntrinsicElements,
>(
  { el, children, className, style, type, htmlType, css: _css }: CardProps<T>,
  ref: React.ForwardedRef<JSX.IntrinsicElements[T]>,
) {
  const Element = el ?? 'div';
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.card;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;

  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
          ref={ref}
          type={htmlType}
          style={mergeStyles(
            themeComponent?.style,
            themeComponentType?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({ color: theme?.color })
                : themeComponent?.css};
              ${typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({ color: theme?.color })
                : themeComponentType?.css};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'card'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `card__type__${type}`),
            themeComponentType?.className,
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
