import type { BlockProps } from './block.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';

const Block = React.forwardRef<any, BlockProps>(function Block<
  T extends keyof JSX.IntrinsicElements,
>(
  {
    el,
    children,
    className,
    type,
    style,
    htmlType,
    css: _css,
    ...props
  }: BlockProps<T>,
  ref: React.ForwardedRef<JSX.IntrinsicElements[T]>,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.block;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
  const Element = el ?? 'div';
  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          // @ts-ignore
          <Element
            // @ts-ignore
            ref={ref}
            style={mergeStyles(
              themeComponent?.style,
              type && themeComponentType?.style,
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
                  : _css};
              `,
              getClassName(theme?.namespace, 'block'),
              themeComponent?.className,
              type && getClassName(theme?.namespace, `block__type__${type}`),
              themeComponentType?.className,
              className,
            )}
            {...props}
          >
            {children}
          </Element>
        );
      }}
    </ClassNames>
  );
});

export default Block;
