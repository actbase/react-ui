import type { ListProps } from './list.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import mergeStyles from '../_util/mergeStyles';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import Theme from '../theme';

const List = React.forwardRef(function List<
  T extends keyof JSX.IntrinsicElements,
>(
  {
    el,
    children,
    style,
    className,
    css: _css,
    htmlType,
    type,
    ...props
  }: ListProps<T>,
  ref: React.ForwardedRef<T>,
) {
  const Element = el ?? 'ul';
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.list;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;

  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
          // @ts-ignore
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
              ${type &&
              (typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({
                    color: theme?.color,
                  })
                : themeComponentType?.css)};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'list'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `list__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        >
          {React.Children.map(children, (child) => {
            if (!(child as React.ReactElement).props) {
              return child;
            }
            return React.cloneElement(child as React.ReactElement, {
              ...(child as React.ReactElement).props,
              style: mergeStyles(
                themeComponentType?.item?.style,
                (child as React.ReactElement).props.style,
              ),
              // @ts-ignore
              css: css`
                ${themeComponentType?.item?.css}
                ${(child as React.ReactElement).props.css}
              `,
              className: cx(
                themeComponentType?.item?.className,
                (child as React.ReactElement).props.className,
              ),
            });
          })}
        </Element>
      )}
    </ClassNames>
  );
});

export default List;
