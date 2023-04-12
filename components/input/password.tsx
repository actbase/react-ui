import React from 'react';
import { PasswordProps } from './password.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const Input = React.forwardRef(function Input({
  hidden = true,
  className,
  placeholder,
  ...props
}: PasswordProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          type={hidden ? 'password' : 'text'}
          className={cx(css`
            ${theme?.components?.input?.style}
          `)}
          placeholder={placeholder}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
