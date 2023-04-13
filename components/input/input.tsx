import React from 'react';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import Theme from '../theme';
import { InputProps } from './input.types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type, htmlType, ...props },
  ref,
) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          ref={ref}
          type={htmlType ?? 'text'}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.input?.style}
              ${type && theme?.components?.input?.type?.[type]}
            `,
            getClassName(theme?.namespace, 'input'),
            type && getClassName(theme?.namespace, `input__type__${type}`),
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
