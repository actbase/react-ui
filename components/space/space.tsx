import React from 'react';
import { SpaceProps } from './space.types';
import Theme from '../theme';
import useCreateElement from '../element/hooks/useCreateElement';

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
    htmlType,
    ...props
  }: SpaceProps<T>,
  ref: React.ForwardedRef<JSX.IntrinsicElements[T]>,
) {
  const theme = Theme.useContext();
  const Element = el ?? 'div';
  return useCreateElement('space', ({ cx, css }) => (
    // @ts-ignore
    <Element
      ref={ref}
      className={cx(
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
          ${size &&
          `gap: ${
            typeof size === 'number'
              ? `${size}px`
              : `${
                  theme?.components?.space?.size?.[size] ??
                  theme?.components?.space?.defaultSize
                }px`
          }`}
        `,
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  ));
});

export default Space;
