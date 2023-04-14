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
          style={mergeStyles(theme?.components?.list?.style, style)}
          // @ts-ignore
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.list?.css};
              ${type && theme?.components?.list?.type?.[type]};
              ${_css}
            `,
            getClassName(theme?.namespace, 'list'),
            theme?.components?.list?.className,
            type && getClassName(theme?.namespace, `list__type__${type}`),
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

export default List;