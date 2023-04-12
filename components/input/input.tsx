import React from 'react';
import { InputProps } from './input.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const Input = React.forwardRef(function Input({
  className,
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
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
