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
            style={theme?.components?.input?.email?.style}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.email?.css}
                ${type && theme?.components?.input?.email?.type?.[type]}
              `,
              getClassName(theme?.namespace, 'input__email'),
              theme?.components?.input?.email?.className,
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
