import React from 'react';
import { SpaceProps } from './space.types';
import { ClassNames } from '@storybook/theming';
import Theme from '../theme';
import getSize from '../_util/getSize';

function Space<T extends keyof JSX.IntrinsicElements>({
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
  ...props
}: SpaceProps<T>) {
  const theme = Theme.useContext();
  const Element = el ?? 'div';
  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          // @ts-ignore
          <Element
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
                  row: reverse ? 'row-reverse' : 'row',
                  column: reverse ? 'column-reverse' : 'column',
                }[direction ?? 'row']};
                flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
                align-items: ${{
                  start: 'flex-start',
                  center: 'center',
                  end: 'flex-end',
                }[align ?? 'center']};
                gap: ${typeof size === 'number'
                    ? `${getSize(theme?.size ?? 10, size)}px`
                    : getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.[size ?? 'sm'] ?? 16,
                      )}
                  ${theme?.components?.space?.style};
              `,
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
}

export default Space;
