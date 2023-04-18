import React from 'react';
import { SpaceProps } from './space.types';
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
              theme?.components?.space?.style,
              type && theme?.components?.space?.type?.[type]?.style,
              style,
            )}
            // @ts-ignore
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
                      // @ts-ignore
                      theme?.components?.space?.size?.[size] ??
                      theme?.components?.space?.defaultSize
                    }px`};
                ${typeof theme?.components?.space?.css === 'function'
                  ? theme.components.space.css({ color: theme?.color })
                  : theme?.components?.space?.css};
                ${type &&
                (typeof theme?.components?.space?.type?.[type]?.css ===
                'function'
                  ? // @ts-ignore
                    theme.components.space.type[type].css({
                      color: theme?.color,
                    })
                  : theme?.components?.space?.type?.[type]?.css)};
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css};
              `,
              getClassName(theme?.namespace, 'space'),
              theme?.components?.space?.className,
              type && getClassName(theme?.namespace, `space__type__${type}`),
              type && theme?.components?.space?.type?.[type]?.className,
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
