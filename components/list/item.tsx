import React from 'react';
import { ClassNames } from '@emotion/react';
import { ListProps } from './list.types';
import mergeStyles from '../_util/mergeStyles';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import Theme from '../theme';

const ListItem = React.forwardRef(function ListItem<
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
  const Element = el ?? 'li';
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
            theme?.components?.list?.item?.style,
            type && theme?.components?.list?.item?.type?.[type]?.style,
            style,
          )}
          // @ts-ignore
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof theme?.components?.list?.item?.css === 'function'
                ? theme.components.list.item.css({ color: theme?.color })
                : theme?.components?.list?.item?.css};
              ${type &&
              (typeof theme?.components?.list?.item?.type?.[type]?.css ===
              'function'
                ? // @ts-ignore
                  theme.components.list.item.type[type].css({
                    color: theme?.color,
                  })
                : theme?.components?.list?.item?.type?.[type]?.css)};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'list__item'),
            theme?.components?.list?.item?.className,
            type && getClassName(theme?.namespace, `list__item__type__${type}`),
            type && theme?.components?.list?.item?.type?.[type]?.className,
            className,
          )}
          {...props}
        >
          {children}
        </Element>
      )}
    </ClassNames>
  );
});

export default ListItem;
