import React from 'react';
import { InputProps } from './input.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          ref={ref}
          type="text"
          className={cx(
            css`
              ${theme?.components?.input?.style}
            `,
            className,
            getClassName(theme?.namespace, 'input'),
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
