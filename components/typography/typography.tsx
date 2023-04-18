import React from 'react';
import type { TypographyProps } from './typography.types';
import useCreateElement from '../element/hooks/useCreateElement';
import Theme from '../theme';

function Typography<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
>({
  children,
  el,
  weight,
  size,
  color,
  className,
  ...props
}: TypographyProps<T, P>) {
  const theme = Theme.useContext();
  const Element = el ?? 'p';
  return useCreateElement('typography', ({ css, cx }) => (
    // @ts-ignore
    <Element
      className={cx(
        css`
          ${size && `font-size: ${size}px;`}
          ${weight && `font-weight: ${weight}`}
          ${color && `color: ${theme?.color?.[color] ?? color}`}
        `,
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  ));
}

export default Typography;
