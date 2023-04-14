import React from 'react';
import { InputPasswordProps } from './password.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  function InputPassword(
    { hidden = true, className, type, htmlType, placeholder, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? (hidden ? 'password' : 'text')}
            style={theme?.components?.input?.password?.style}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.password?.css}
                ${type && theme?.components?.input?.password?.type?.[type]}
              `,
              getClassName(theme?.namespace, 'input__password'),
              theme?.components?.input?.password?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__password__type__${type}`,
                ),
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
