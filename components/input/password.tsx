import React from 'react';
import { InputPasswordProps } from './password.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  function InputPassword(
    { hidden = true, className, placeholder, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={hidden ? 'password' : 'text'}
            className={cx(
              css`
                ${theme?.components?.input?.style}
              `,
              getClassName(theme?.namespace, 'input__password'),
              className,
            )}
            placeholder={placeholder}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputPassword;
