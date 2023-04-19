import type { ListProps } from './list.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import mergeStyles from '../_util/mergeStyles';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import Theme from '../theme';

const ListItem = React.forwardRef(function ListItem<
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
  const Element = el ?? 'li';
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.list?.item;
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
            getClassName(theme?.namespace, 'list__item'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `list__item__type__${type}`),
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
});

export default ListItem;
