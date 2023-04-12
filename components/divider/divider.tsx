import React from 'react';
import { ClassNames } from '@emotion/react';
import { DividerProps } from './divider.types';
import Theme from '../theme';

function Divider({ color, className, ...props }: DividerProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <hr
          className={cx(
            css`
              border: none;
              height: 1px;
              display: block;
              margin: 0;
              width: 100%;
              ${theme?.components?.divider?.style}
              background-color: ${theme?.components?.divider?.color?.[
                // @ts-ignore
                color ?? theme?.components?.divider?.defaultColor
              ] ??
              color ??
              theme?.components?.divider?.defaultColor ??
              '#eeeeee'};
            `,
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
}

export default Divider;
