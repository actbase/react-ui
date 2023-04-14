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
          style={mergeStyles(theme?.components?.list?.item?.style, style)}
          // @ts-ignore
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.list?.item?.css};
              ${type && theme?.components?.list?.item?.type?.[type]};
              ${_css}
            `,
            getClassName(theme?.namespace, 'list__item'),
            theme?.components?.list?.item?.className,
            type && getClassName(theme?.namespace, `list__item__type__${type}`),
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
