import type { SpaceProps } from './space.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';

const Space = React.forwardRef(function Space<
  T extends keyof JSX.IntrinsicElements,
>(
  {
    el,
    inline,
    children,
    align,
    justify,
    className,
    size,
    direction,
    wrap,
    reverse,
    type,
    style,
    htmlType,
    css: _css,
    ...props
  }: SpaceProps<T>,
  ref: React.ForwardedRef<JSX.IntrinsicElements[T]>,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.space;
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
                display: ${inline ? 'inline-flex' : 'flex'};
                justify-content: ${{
                  start: 'flex-start',
                  center: 'center',
                  end: 'flex-end',
                  'space-between': 'space-between',
                  'space-around': 'space-around',
                  'space-evenly': 'space-evenly',
                }[justify ?? 'start']};
                flex-direction: ${{
                  horizontal: reverse ? 'row-reverse' : 'row',
                  vertical: reverse ? 'column-reverse' : 'column',
                }[direction ?? 'horizontal']};
                flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
                align-items: ${{
                  start: 'flex-start',
                  center: 'center',
                  end: 'flex-end',
                  stretch: 'stretch',
                }[align ?? 'stretch']};
                gap: ${typeof size === 'number'
                  ? `${size}px`
                  : `${
                      (size && themeComponent?.size?.[size]) ??
                      themeComponent?.defaultSize
                    }px`};
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
              getClassName(theme?.namespace, 'space'),
              themeComponent?.className,
              type && getClassName(theme?.namespace, `space__type__${type}`),
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

export default Space;
