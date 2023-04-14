import React from 'react';
import { InputEmailProps } from './email.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  function InputEmail(
    { className, placeholder, style, type, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type="email"
            style={mergeStyles(theme?.components?.input?.email?.style, style)}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.email?.css}
                ${type && theme?.components?.input?.email?.type?.[type]}
                ${_css}
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
