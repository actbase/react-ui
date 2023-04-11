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
                  : {
                      xxs: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.xxs ?? 6,
                      )}px`,
                      xs: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.xs ?? 10,
                      )}px`,
                      s: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.s ?? 14,
                      )}px`,
                      sm: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.sm ?? 16,
                      )}px`,
                      m: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.m ?? 18,
                      )}px`,
                      ml: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.ml ?? 24,
                      )}px`,
                      l: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.l ?? 30,
                      )}px`,
                      xl: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.xl ?? 36,
                      )}px`,
                      xxl: `${getSize(
                        theme?.size ?? 10,
                        theme?.components?.space?.size?.xxl ?? 40,
                      )}px`,
                    }[size ?? 'm']};
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
