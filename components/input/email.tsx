import React from 'react';
import { InputEmailProps } from './email.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';

const InputEmail = React.forwardRef(function InputEmail({
  className,
  placeholder,
  ...props
}: InputEmailProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          type="email"
          className={cx(
            css`
              ${theme?.components?.input?.style}
            `,
            getClassName(theme?.namespace, 'input__email'),
            className,
          )}
          placeholder={placeholder}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default InputEmail;
