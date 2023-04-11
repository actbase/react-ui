import React from 'react';
import { TypographyProps } from './typography.types';
import { ClassNames } from '@storybook/theming';
import Theme from '../theme';
import getSize from '../_util/getSize';

function Typography<T extends keyof JSX.IntrinsicElements>({
  children,
  el,
  className,
  font,
  level,
  weight,
  size,
  color,
  ...props
}: TypographyProps<T>) {
  const theme = Theme.useContext();
  const Element = el ?? 'p';
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Element
          className={cx(
            css`
              margin: 0;
              font-family: ${theme?.components?.typography?.font?.[
                font ?? theme?.components?.typography?.defaultFont
              ]};
              font-size: ${getSize(
                theme?.size ?? 10,
                size ??
                  theme?.components?.typography?.level?.[level ?? 5]?.size ??
                  16,
              )}px;
              font-weight: ${weight ??
              theme?.components?.typography?.level?.[level ?? 5]?.weight ??
              400};
              color: ${theme?.components?.typography?.color?.[
                color ?? 'default'
              ] ?? '#333333'};
              ${theme?.components?.typography?.style}
            `,
            className,
          )}
          {...props}
        >
          {children}
        </Element>
      )}
    </ClassNames>
  );
}

export default Typography;
