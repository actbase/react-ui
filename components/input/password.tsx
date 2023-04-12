import React from 'react';
import { PasswordProps } from './password.types';
import { ClassNames } from '@emotion/react';

const Input = React.forwardRef(function Input({
  hidden = true,
  className,
  ...props
}: PasswordProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          type={hidden ? 'password' : 'text'}
          className={cx(css``)}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
