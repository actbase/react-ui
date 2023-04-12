import React from 'react';
import { InputProps } from './input.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const Input = React.forwardRef(function Input({
  className,
  placeholder,
  ...props
}: InputProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          type="text"
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
