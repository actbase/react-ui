import React from 'react';
import { SpaceProps } from './space.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';

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
                    ? `${size}px`
                    : `${
                        theme?.components?.space?.size?.[
                          // @ts-ignore
                          size ?? theme?.components?.space?.defaultSize
                        ]
                      }px`}
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
