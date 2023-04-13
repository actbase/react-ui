import React from 'react';
import { InputEmailProps } from './email.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  function InputEmail({ className, placeholder, type, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type="email"
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.style}
                ${type && theme?.components?.input?.type?.[type]}
              `,
              getClassName(theme?.namespace, 'input__email'),
              type &&
                getClassName(theme?.namespace, `input__email__type__${type}`),
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

export default InputEmail;
