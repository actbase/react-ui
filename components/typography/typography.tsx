import React from 'react';
import { TypographyProps } from './typography.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';

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
        // @ts-ignore
        <Element
          className={cx(
            css`
              margin: 0;
              font-family: ${theme?.components?.typography?.font?.[
                // @ts-ignore
                font ?? theme?.components?.typography?.defaultFont
              ]};
              color: ${theme?.components?.typography?.color?.[
                color ??
                  theme?.components?.typography?.defaultColor ??
                  'default'
              ] ??
              color ??
              '#333333'};
              ${theme?.components?.typography?.style}
              ${theme?.components?.typography?.level?.[
                // @ts-ignore
                level ?? theme?.components?.typography?.defaultLevel
              ]}
              ${size && `font-size: ${size}px`}
              ${weight && `font-weight: ${weight}`}
            `,
            getClassName(theme?.namespace, 'typography'),
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
