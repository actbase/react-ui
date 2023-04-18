import React from 'react';
import { ClassNames } from '@emotion/react';
import { ListProps } from './list.types';
import mergeStyles from '../_util/mergeStyles';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import Theme from '../theme';

const List = React.forwardRef(function List<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
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
  }: ListProps<T, P>,
  ref: React.ForwardedRef<T>,
) {
  const Element = el ?? 'ul';
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
          style={mergeStyles(
            theme?.components?.list?.style,
            type && theme?.components?.list?.type?.[type]?.style,
            style,
          )}
          // @ts-ignore
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof theme?.components?.list?.css === 'function'
                ? theme?.components?.list?.css({ color: theme?.color })
                : theme?.components?.list?.css};
              ${type &&
              (typeof theme?.components?.list?.type?.[type]?.css === 'function'
                ? // @ts-ignore
                  theme.components.list.type[type].css({
                    color: theme?.color,
                  })
                : theme?.components?.list?.type?.[type]?.css)};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'list'),
            theme?.components?.list?.className,
            type && getClassName(theme?.namespace, `list__type__${type}`),
            type && theme?.components?.list?.type?.[type]?.className,
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
                type && theme?.components?.list?.type?.[type]?.item?.style,
                (child as React.ReactElement).props.style,
              ),
              css: css`
                ${type && theme?.components?.list?.type?.[type]?.item?.css}
                ${(child as React.ReactElement).props.css}
              `,
              className: cx(
                type && theme?.components?.list?.type?.[type]?.item?.className,
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
