import React from 'react';
import { InputProps } from './input.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';

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
            getNamespace(theme?.namespace),
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
